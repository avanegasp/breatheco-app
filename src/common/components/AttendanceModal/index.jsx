/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import PropTypes from 'prop-types';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Button, Box,
  NumberInput, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper, NumberInputField,
  FormControl, FormLabel, Flex, Grid, useCheckbox, useCheckboxGroup, Avatar,
  useColorMode, useToast, Select, ModalCloseButton,
  TableCaption,
} from '@chakra-ui/react';
import Icon from '../Icon';
import Text from '../Text';
import bc from '../../services/breathecode';
import { usePersistent } from '../../hooks/usePersistent';
import ModalInfo from '../../../js_modules/moduleMap/modalInfo';
import useStyle from '../../hooks/useStyle';
import AttendanceTable from './AttendanceTable';

const AttendanceModal = ({
  title, message, isOpen, onClose, sortedAssignments, students,
}) => {
  const { t } = useTranslation('dashboard');
  const [cohortSession, setCohortSession] = usePersistent('cohortSession', {});
  const [daysHistoryLog, setDaysHistoryLog] = usePersistent('days_history_log', {});
  const [day, setDay] = useState(cohortSession.current_day);
  const [attendanceWasTaken, setAttendanceWasTaken] = useState(false);
  const [attendanceTaken, setAttendanceTaken] = useState({});
  const [currentModule, setCurrentModule] = useState(cohortSession.current_module);
  const [defaultDay, setDefaultDay] = useState(0);
  const [checked, setChecked] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openWarn, setOpenWarn] = useState(false);
  const { colorMode } = useColorMode();
  const toast = useToast();

  const { lightColor, borderColor } = useStyle();

  const { getCheckboxProps } = useCheckboxGroup({
    onChange: setChecked,
  });
  const cohortDurationInDays = cohortSession.syllabus_version.duration_in_days;

  const currentCohortDay = cohortSession.current_day;

  const getDailyModuleData = () => {
    if (sortedAssignments.length > 0) {
      const dailyModule = sortedAssignments.find(
        (assignment) => assignment.id === currentModule,
      );
      const prevDailyModule = sortedAssignments.find(
        (assignment) => assignment.id === (currentModule - 1),
      );
      return {
        dailyModule,
        prevDailyModule,
      };
    }
    return null;
  };

  const currModuleData = getDailyModuleData()?.dailyModule;
  const prevSumOfDays = sortedAssignments.reduce(
    (accumulator, object) => {
      if (object.id >= currModuleData?.id) return accumulator;
      return accumulator + object.duration_in_days;
    }, 0,
  );

  useEffect(() => {
    setDefaultDay(currentCohortDay);
  }, [currentCohortDay]);

  const saveCohortAttendancy = () => {
    const cohortSlug = cohortSession.slug;
    // const userAgent = `bc/${cohortSession?.cohort_role?.toLowerCase() || 'teacher'}`;

    const attendanceIds = students.reduce(
      (accumulator, { user }) => {
        const attended = checked.some((id) => parseInt(id, 10) === user.id);
        if (attended) {
          accumulator.attended.push(user.id);
        } else {
          accumulator.unattended.push(user.id);
        }
        return accumulator;
      }, { attended: [], unattended: [] },
    );

    const dataStruct = {
      current_module: currentModule,
      teacher_comments: '',
      attendance_ids: attendanceIds.attended,
      unattendance_ids: attendanceIds.unattended,
    };

    bc.cohort().takeAttendance(
      cohortSlug,
      dataStruct,
    )
      .then(() => {
        toast({
          title: t('alert-message:attendancy-reported'),
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        setIsLoading(false);
      })
      .catch(() => {
        toast({
          title: t('alert-message:attendancy-report-error'),
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!daysHistoryLog.currSumOfDays && currModuleData) {
      setDaysHistoryLog({
        prevSumOfDays,
        currSumOfDays: prevSumOfDays + currModuleData?.duration_in_days,
      });
    }
  }, [cohortSession, currModuleData]);

  const updateCohortDay = () => {
    setIsLoading(true);
    bc.cohort()
      .update(cohortSession.id, { current_day: Number(day), current_module: currentModule })
      .then(({ data }) => {
        setCohortSession({
          ...cohortSession,
          current_module: data.current_module,
        });
        setDaysHistoryLog({
          prevSumOfDays,
          currSumOfDays: prevSumOfDays + currModuleData?.duration_in_days,
        });
        bc.cohort().getAttendance(cohortSession.slug)
          .then((res) => {
            const currentDayExists = typeof res.data[day] === 'object';
            const attendanceLog = currentDayExists ? students.filter(
              (student) => res.data[day].attendance_ids.find((userId) => userId === student.user.id),
            ) : [];
            const unattendanceLog = currentDayExists ? students.filter(
              (student) => res.data[day].unattendance_ids.find((userId) => userId === student.user.id),
            ) : [];

            const currentLog = [...attendanceLog, ...unattendanceLog];

            setAttendanceTaken({
              updated_at: currentDayExists ? res.data[day].updated_at : null,
              attendanceStudents: attendanceLog,
              unattendanceStudents: unattendanceLog,
              current_module: currentDayExists ? res.data[day].current_module : null,
              teacher_comments: currentDayExists ? res.data[day].teacher_comments : null,
              day,
            });

            if (currentLog.length === 0) {
              setCohortSession({ ...cohortSession, ...data });
              saveCohortAttendancy();
            } else {
              setAttendanceWasTaken(true);
              toast({
                title: t('alert-message:attenadance-already-taken', { count: day }),
                // title: `Attendance for day ${day} has already been taken`,
                status: 'warning',
                duration: 9000,
                isClosable: true,
              });
            }
          })
          .catch((error) => {
            toast({
              title: t('alert-message:error-getting-previous-attendance'),
              status: 'error',
              duration: 9000,
              isClosable: true,
            });
            console.error('getAttendance_error:', error);
          })
          .finally(() => {
            setOpenWarn(false);
            setIsLoading(false);
          });
        return data;
      })
      .catch(() => {
        setOpenWarn(false);
        setIsLoading(false);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxWidth="-webkit-fit-content" borderRadius="17px" padding="10px" bg={colorMode === 'light' ? 'white' : 'featuredDark'}>
        <ModalHeader fontSize="30px" paddingBottom={0}>
          {title}
        </ModalHeader>
        <ModalBody>
          <Text size="l" color={colorMode === 'light' ? 'gray.dark' : 'white'}>
            {message}
          </Text>
          <Box display="flex" gridGap="25px" padding="20px 0 0 0">
            <FormControl id="days">
              <FormLabel htmlFor="day" color={lightColor} fontSize="12px">{t('attendance-modal.day')}</FormLabel>
              <NumberInput
                defaultValue={defaultDay}
                max={cohortDurationInDays}
                min={defaultDay}
                onChange={(newDay) => setDay(parseInt(newDay, 10))}
              >
                <NumberInputField color={colorMode === 'light' ? 'black' : 'white'} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="current_module" color={lightColor} fontSize="12px">{t('attendance-modal.module')}</FormLabel>
              {sortedAssignments.length > 0 && (
                <Select defaultValue={currentModule} onChange={(e) => setCurrentModule(parseInt(e.target.value, 10))} id="module" placeholder="Select module">
                  {sortedAssignments.map((module) => (
                    <option key={module.id} value={module.id}>
                      {`#${module.id} - ${module.label}`}
                    </option>
                  ))}
                </Select>
              )}
            </FormControl>
          </Box>
          <Box height="1px" bg={borderColor} marginTop="32px" marginBottom="15px" />
          <Box>
            <Flex justifyContent="space-between" padding="6px 0 16px 0">
              <Text size="l" color={colorMode === 'light' ? 'gray.dark' : 'white'}>
                {t('attendance-modal.select-students')}
              </Text>
              <Text size="l" color={colorMode === 'light' ? 'gray.dark' : 'white'}>
                {checked.length > 1 || checked.length === 0
                  ? t('attendance-modal.students-selected', { count: checked.length })
                  : t('attendance-modal.student-selected', { count: checked.length })}
              </Text>
            </Flex>
            <Grid templateColumns={{ md: 'repeat(4, 4fr)', sm: 'repeat(1, 1fr)' }} gap={6}>
              {students.map((item) => {
                const checkbox = getCheckboxProps({ value: item.user.id.toString() });
                return (
                  <CheckboxCard key={`${item.user.id}-${item.user.first_name}`} {...checkbox}>
                    <Flex justifyContent="space-between">
                      <Flex marginRight="12px" alignItems="center">
                        <Avatar
                          width="30px"
                          marginY="auto"
                          marginRight="5px"
                          height="30px"
                          src={item.user?.profile?.avatar_url || ''}
                        />
                        <Text size="md">{`${item.user.first_name} ${item.user.last_name}`}</Text>
                      </Flex>
                      <Icon
                        icon={checkbox.isChecked ? 'checked' : 'unverified'}
                        width="15px"
                        height="15px"
                        style={{ marginTop: 'auto', marginBottom: 'auto' }}
                      />
                    </Flex>
                  </CheckboxCard>
                );
              })}
            </Grid>
          </Box>
        </ModalBody>
        <ModalFooter justifyContent="space-between">
          <Text
            color={lightColor}
            size="sm"
          >
            {t('attendance-modal.showing-students-with-active-educational-status')}
          </Text>
          <Button
            isLoading={isLoading}
            loadingText="SUBMITTING"
            minWidth="173.4px"
            textTransform="uppercase"
            fontSize="13px"
            disabled={checked.length < 1 || isLoading}
            variant="default"
            onClick={() => {
              if (daysHistoryLog.prevSumOfDays >= day) {
                setOpenWarn(true);
              } else {
                updateCohortDay();
              }
            }}
            rightIcon={<Icon icon="longArrowRight" width="15px" color={checked.length < 1 ? 'black' : 'white'} />}
          >
            {t('attendance-modal.apply-changes')}
          </Button>

          <ModalInfo
            isOpen={openWarn}
            onClose={() => setOpenWarn(false)}
            htmlDescription={t('attendance-modal.warn-premature-teaching.description', { module: getDailyModuleData()?.dailyModule?.label, durationInDays: daysHistoryLog.prevSumOfDays, day })}
            actionHandler={() => {
              setOpenWarn(false);
              updateCohortDay();
            }}
            closeButtonVariant="outline"
            title={t('attendance-modal.warn-premature-teaching.title')}
            handlerText={t('common:confirm')}

          />
        </ModalFooter>
      </ModalContent>

      <Modal isOpen={attendanceWasTaken} margin="0 10px" onClose={() => setAttendanceWasTaken(false)}>
        <ModalOverlay />
        <ModalContent style={{ maxWidth: '52rem' }}>
          <ModalHeader borderBottom="1px solid" fontSize="15px" textTransform="uppercase" borderColor={borderColor} textAlign="center">
            {t('attendance-modal.list-attendance-title', { count: attendanceTaken.length })}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody padding="0.5rem 0 0.5rem 0">
            <AttendanceTable attendanceTaken={attendanceTaken} />
          </ModalBody>
          <ModalFooter>
            <TableCaption padding="0 8%">
              {t('attendance-modal.attendance-taken-table-message')}
            </TableCaption>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Modal>
  );
};

export const CheckboxCard = (props) => {
  const { children } = props;
  const { getInputProps, getCheckboxProps } = useCheckbox(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  const { fontColor, borderColor, featuredColor } = useStyle();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        // borderWidth="2px"
        borderRadius="md"
        border="2px solid"
        borderColor={borderColor}
        _checked={{
          bg: featuredColor,
          color: fontColor,
          borderColor: 'blue.default',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={2}
        py={1}
      >
        {children}
      </Box>
    </Box>
  );
};

CheckboxCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  value: PropTypes.string.isRequired,
};

AttendanceModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  sortedAssignments: PropTypes.arrayOf(PropTypes.object).isRequired,
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
AttendanceModal.defaultProps = {
  title: '',
  message: '',
  isOpen: true,
  onClose: () => { },
};

export default AttendanceModal;