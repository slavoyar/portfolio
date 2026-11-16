'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const SectorView = dynamic(() => import('./SectorView').then((m) => ({ default: m.SectorView })), {
  loading: () => <div className='min-h-dvh bg-bg' aria-hidden='true' />,
});

export function PortfolioHome() {
  return (
    <Suspense fallback={<div className='min-h-dvh bg-bg' aria-hidden='true' />}>
      <SectorView />
    </Suspense>
  );
}
