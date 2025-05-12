'use client';
import * as React from 'react';
import { 
    MediaPlayer, 
    MediaPlayerInstance, 
    MediaProvider, 
    MediaStreamType, 
    PlayerSrc 
} from '@vidstack/react';

import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

export type VideoPlayerProps = {
  videoSrc: PlayerSrc;
  thumbnail?: string | null;
  streamType?: MediaStreamType;
};

const Player: React.FC<VideoPlayerProps> = (props) => {
  const player = React.useRef<MediaPlayerInstance>(null);

  return (
   
    <MediaPlayer
      streamType={props.streamType || 'unknown'}
      title="Islamimarkaz"
      viewType="video"
      poster={props.thumbnail || undefined}
      src={props.videoSrc}
      ref={player}
      playsInline
      autoPlay
      crossOrigin
    >
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
 
  );
};

export default Player;
