import {useRef, useEffect} from 'react'

export default function useInterval(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    });
    useEffect(() => {
      if (delay !== 0) {
        const interval = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(interval);
      }
    }, [delay]);
  }