import {
  Box, useColorModeValue, Flex, Grid,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Heading from '../../common/components/Heading';
import Text from '../../common/components/Text';
import Search from '../../js_modules/projects/Search';
import TitleContent from '../../js_modules/projects/TitleContent';
import Link from '../../common/components/NextChakraLink';
import { devLog } from '../../utils';
import GridContainer from '../../common/components/GridContainer';

export const getStaticPaths = async ({ locales }) => {
  const resp = await fetch(`${process.env.BREATHECODE_HOST}/v1/admissions/public/syllabus?slug=${process.env.SYLLABUS}`);
  const lessonList = await resp.json();

  // generate locale each param.slug with flatMap
  const paths = lessonList.flatMap((res) => locales.map((locale) => ({
    params: {
      slug: res.slug,
    },
    locale,
  })));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async ({ locale, locales, params }) => {
  const { slug } = params;

  const resp = await fetch(
    `${process.env.BREATHECODE_HOST}/v1/admissions/syllabus/${slug}/version/1`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${process.env.BC_ACADEMY_TOKEN}`,
        Academy: 4,
      },
    },
  );
  const data = await resp.json();

  if (resp.status >= 400) {
    console.error(`ERROR with /read/${slug}: something went wrong fetching "/v1/admissions/syllabus/${slug}/version/1", probably the env "BC_ACADEMY_TOKEN" has expired`);
    return {
      notFound: true,
    };
  }

  const ogUrl = {
    en: `/read/${slug}`,
    us: `/read/${slug}`,
  };

  return {
    props: {
      seo: {
        title: data?.name || '',
        image: data?.logo || '',
        url: ogUrl.en || `/${locale}/read/${slug}`,
        pathConnector: `/read/${slug}`,
        keywords: data?.seo_keywords || '',
        type: 'article',
        locales,
        locale,
      },
      fallback: false,
      data,
    },
  };
};

const Read = ({ data }) => {
  const router = useRouter();
  const { t } = useTranslation('read');
  const commonTextColor = useColorModeValue('gray.600', 'gray.200');
  devLog('data:', data);

  const containsQueryString = (lesson) => {
    const lessonTitle = lesson.label.toLowerCase();
    if (typeof router.query.search === 'string' && !lessonTitle.includes(router.query.search)) return false;
    if (lesson?.lessons?.length <= 0) return false;
    return true;
  };

  const filteredBySearch = () => {
    if (data === null) return [];
    const moduleData = data.json?.days || data.json?.modules;
    return moduleData.filter(containsQueryString);
  };
  const datafiltered = filteredBySearch();

  return (
    <Box height="100%" flexDirection="column" justifyContent="center" alignItems="center">
      <TitleContent title={t('title')} mobile />
      <Box
        display="grid"
        gridTemplateColumns={{
          base: '.5fr repeat(12, 1fr) .5fr',
          md: '1.5fr repeat(12, 1fr) 1.5fr',
        }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Flex
          gridColumn="2 / span 12"
          justifyContent="space-between"
          flex="1"
          gridGap="20px"
          padding={{ base: '3% 0 4% 0', md: '1.5% 0 1.5% 0' }}
        >
          <TitleContent title={t('title')} mobile={false} />

          <Search placeholder={t('search')} />

          <Box width="0" height="0" display={{ base: 'none', md: 'block' }} />
        </Flex>
      </Box>
      <Flex
        flex="1"
        flexDirection="column"
        justifyContent="center"
        background="yellow.light"
        height="auto"
        padding="20px 0"
        minHeight="220px"
        gridGap="10px"
      >
        <Text
          fontWeight="400"
          letterSpacing="0.05em"
          size="md"
          color={useColorModeValue('gray.600', 'gray.600')}
          textTransform="uppercase"
          textAlign="center"
        >
          {t('label')}
        </Text>
        <Heading
          as="h1"
          fontWeight="700"
          color={useColorModeValue('gray.900', 'gray.900')}
          size="m"
          textAlign="center"
        >
          {data.name}
        </Heading>
        <Text
          size="md"
          padding={{ base: '0 8%', md: '0 28%' }}
          textAlign="center"
          color="gray.dark"
        >
          {t('description')}
        </Text>
      </Flex>
      <GridContainer flex="1" gridTemplateColumns={{ base: '.5fr repeat(12, 1fr) .5fr', md: '4.8fr repeat(12, 1fr) 4.8fr' }}>
        {datafiltered.map(
          (element) => element.label !== '' && (
          <Box key={`${element.id} - ${element.position}`} margin="50px 0 0 0">
            <Flex
              justifyContent="space-between"
              padding="18px 0"
              borderBottom={2}
              borderStyle="solid"
              flexDirection={{ base: 'column', md: 'row' }}
              borderColor={useColorModeValue('gray.200', 'gray.500')}
            >
              <Heading as="h2" fontWeight="700" size="xsm">
                {element.label}
              </Heading>
              <Text
                as="span"
                size="l"
                letterSpacing="0.05em"
                fontWeight="400"
                textAlign={{ base: 'left', md: 'center' }}
                color="gray.default"
                textTransform="uppercase"
              >
                {element?.lessons?.length}
                {' '}
                {element?.lessons?.length > 1 ? t('lessons') : t('lesson')}
              </Text>
            </Flex>
            <Text
              size="md"
              padding="15px 0"
              // color="gray.dark"
              letterSpacing="0.05em"
              lineHeight="24px"
              color={commonTextColor}
            >
              {element.description}
            </Text>
            {element?.lessons?.length >= 1 && (
            <Grid
              background={useColorModeValue('featuredLight', 'featuredDark')}
              gridRowGap="10px"
              gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
              padding="22px 30px"
              borderRadius="18px"
            >
              {element.lessons.map((lesson) => (
                <Link
                  key={`${lesson.slug}-${lesson.title}`}
                  href={`/lesson/${lesson.slug}`}
                  fontSize="15px"
                  width="fit-content"
                  height="fit-content"
                  color={useColorModeValue('blue.default', 'blue.300')}
                  display="inline-block"
                  letterSpacing="0.05em"
                  fontWeight="700"
                >
                  {lesson.title}
                </Link>
              ))}
            </Grid>
            )}
          </Box>
          ),
        )}
      </GridContainer>
    </Box>
  );
};

Read.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};
Read.defaultProps = {
  data: null,
};

export default Read;
