/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

// Define the types for the props
interface VideoProps {
  videoFile?: {
    url: string; // URL of the video file
    contentType: string; // Content type of the video (e.g., 'video/mp4')
    width?: number; // Optional width of the video
    height?: number; // Optional height of the video
  };
  autoplayMuted?: boolean; // Whether to autoplay and mute the video
  loop?: boolean; // Whether to loop the video
  posterImage?: { url: string }; // Optional poster image for the video
}

const Video: React.FC<VideoProps> = ({
  videoFile,
  autoplayMuted,
  loop,
  posterImage,
}) => {
  

  return (
    <div className='h-48 w-48 md:h-80 md:w-80 mt-4 mb-4 flex-shrink-0 mx-auto'>
        <div className="relative rounded-full md:rounded-3xl overflow-hidden shadow-sm">
          <video
            id={'ffern.mp4'}
            width={videoFile?.width || undefined}
            height={videoFile?.height || undefined}
            muted={autoplayMuted}
            autoPlay={autoplayMuted}
            playsInline={autoplayMuted}
            loop={loop}
            poster={posterImage?.url || undefined}
          >
            <source src={'ffern.mp4'} type={videoFile?.contentType} />
          </video>
        </div>
      </div>
  )
};

export default Video;
