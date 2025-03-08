import React from 'react';
import {
  Box,
  Button,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import Heading from '../../common/components/Heading';
import useStyle from '../../common/hooks/useStyle';
import ReactPlayerV2 from '../../common/components/ReactPlayerV2';

function StickyBottomCta({ asset, onClick, isCtaVisible, course, videoUrl, couponApplied, financingAvailable, isAuthenticated, paymentOptions, ...rest }) {
  const { t } = useTranslation('exercises');
  const { hexColor } = useStyle();

  const includesFreeTier = paymentOptions?.some((option) => option.isFreeTier);

  if (!isCtaVisible) return null;

  const getHeadingForAsset = () => {
    if (!isAuthenticated && videoUrl) return t('video-instructions');
    if (isAuthenticated && videoUrl) return t('video-instructions-logged');
    return t('start-interactive');
  };

  const getButtonTextForAsset = () => {
    if (!isAuthenticated) return t('create-account');
    if (videoUrl) return t('see-instructions');
    return t('start-interactive-cta');
  };

  return (
    <>
      <Box
        overflow="hidden"
        position="fixed"
        width="100vw"
        bottom="0"
        zIndex="100"
        borderRadius="11px 11px 0 0"
        border="1px solid"
        borderColor={hexColor.greenLight}
        background={couponApplied ? hexColor.greenLight4 : hexColor.backgroundColor}
        textAlign="center"
        display={{ base: 'block', md: 'none' }}
        {...rest}
      >
        <Box paddingBottom="20px">
          {videoUrl && (
            <ReactPlayerV2
              title={asset && 'Video tutorial'}
              withModal
              url={videoUrl}
              withThumbnail
              thumbnailStyle={{
                borderRadius: '0 0 0 0',
                height: '110px',
              }}
            />
          )}
          {asset && (
            <>
              <Heading size="sm" mt="10px">
                {getHeadingForAsset()}
              </Heading>
              <Button display="block" width="95%" margin="10px auto" color="white" background={hexColor.greenLight} onClick={onClick}>
                {getButtonTextForAsset()}
              </Button>
            </>
          )}
          {course && (
            <>
              <Heading size="21px" color="black" pt="10px">{t('course:join-cohort')}</Heading>
              {!videoUrl && (
                <>
                  <Text color="black">{t('course:create-account-text')}</Text>
                  <Button fontSize="18px" display="block" width="95%" margin="10px auto" border={`1px solid ${hexColor.greenLight}`} color={hexColor.greenLight} background={hexColor.backgroundColor} onClick={onClick}>
                    {financingAvailable ? t('common:see-financing-options') : t('common:enroll')}
                  </Button>
                </>
              )}
              {includesFreeTier && (
                <Button fontSize="18px" display="block" width="95%" margin="10px auto" color="white" background={hexColor.greenLight} onClick={onClick}>
                  {t('common:start-free-trial')}
                </Button>
              )}
            </>
          )}
        </Box>
      </Box>
    </>
  );
}

StickyBottomCta.propTypes = {
  asset: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
  course: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
  videoUrl: PropTypes.string,
  couponApplied: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  onClick: PropTypes.func.isRequired,
  isCtaVisible: PropTypes.bool.isRequired,
  financingAvailable: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  paymentOptions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any]))).isRequired,
};

StickyBottomCta.defaultProps = {
  couponApplied: undefined,
  videoUrl: undefined,
  financingAvailable: undefined,
  isAuthenticated: false,
};

export default StickyBottomCta;
