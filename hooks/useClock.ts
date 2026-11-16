'use client';

import { useEffect, useState } from 'react';

export function useClock() {
  const [clock, setClock] = useState('--:--:--');

  useEffect(() => {
    const tick = () => {
      setClock(
        new Intl.DateTimeFormat(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date())
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return clock;
}
