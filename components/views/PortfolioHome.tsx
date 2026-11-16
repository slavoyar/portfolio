'use client';

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

import { DEFAULT_VIEW, isViewId, type ViewId, viewToSectorVariant } from '@/lib/portfolio';

const SectorView = dynamic(() => import('./SectorView').then((m) => ({ default: m.SectorView })), {
  loading: () => <div className='min-h-dvh bg-bg' aria-hidden='true' />,
});

function PortfolioView() {
  const searchParams = useSearchParams();
  const raw = searchParams.get('view');
  const view: ViewId = isViewId(raw) ? raw : DEFAULT_VIEW;

  return <SectorView variant={viewToSectorVariant(view)} />;
}

export function PortfolioHome() {
  return (
    <Suspense fallback={<div className='min-h-dvh bg-bg' aria-hidden='true' />}>
      <PortfolioView />
    </Suspense>
  );
}
