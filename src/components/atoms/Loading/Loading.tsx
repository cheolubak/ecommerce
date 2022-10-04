import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import { LoadingStyled } from './LoadingStyled';

export default function Loading({ ...props }) {
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadingRef.current) {
      lottie.loadAnimation({
        container: loadingRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./loading.json'),
      });
      lottie.setSpeed(0.8);
    }
  }, []);
  return <LoadingStyled ref={loadingRef} />;
}
