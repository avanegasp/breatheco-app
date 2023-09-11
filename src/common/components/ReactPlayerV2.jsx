import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

function ReactPlayerV2({
  url, controls, className, iframeStyle, ...rest
}) {
  const isLoomVideo = url && url.includes('loom.com');
  const getVideo = () => {
    if (isLoomVideo) {
      return url.replace('/share/', '/embed/');
    }
    return url;
  };

  const videoUrl = getVideo();

  return (
    <>
      {url && !isLoomVideo && (
        <ReactPlayer
          className={`react-player ${className}`}
          url={videoUrl}
          controls={controls}
          width="100%"
          height="-webkit-fill-available"
          style={iframeStyle}
          {...rest}
        />

      )}
      {url && isLoomVideo && (
        <div
          className={`lo-emb-vid ${className}`}
          style={{
            position: 'relative', paddingBottom: '75%', height: 0, borderRadius: '3px',
          }}
        >
          <iframe
            title="Loom video"
            src={videoUrl}
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', ...iframeStyle,
            }}
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
          />
        </div>
      )}
    </>
  );
}

ReactPlayerV2.propTypes = {
  url: PropTypes.string,
  controls: PropTypes.bool,
  className: PropTypes.string,
  iframeStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.any])),
};
ReactPlayerV2.defaultProps = {
  url: '',
  controls: true,
  className: '',
  iframeStyle: {},
};

export default ReactPlayerV2;
