import React from 'react';

interface VideoProps {
  videoFile?: {
    url: string;
    contentType: string;
    width?: number;
    height?: number;
  };
  autoplayMuted?: boolean;
  loop?: boolean;
  posterImage?: { url: string };
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
