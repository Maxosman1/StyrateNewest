import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './loading.css';

export const Loading = () => {
  const spinValue = useRef(0);

  const { springValue } = useSpring({
    from: { springValue: 0 },
    to: async (next) => {
      while (1) {
        await next({ springValue: 1 });
        await next({ springValue: 0 });
      }
    },
    config: { duration: 1000 },
  });

  useEffect(() => {
    spinValue.current = springValue.to((val) => val * 360);
  }, [springValue]);

  return (
    <div className="container">
      <animated.div style={{ transform: spinValue.current.interpolate((val) => `rotate(${val}deg)`) }}>
        <img src="/assets/icons/loading.svg" width="40px" height="40px" alt="Loading" />
      </animated.div>
    </div>
  );
};
