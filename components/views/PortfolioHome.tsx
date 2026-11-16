'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

import { DEFAULT_VIEW, isViewId, type ViewId, viewToSectorVariant } from '@/lib/portfolio';

import { SectorView } from './SectorView';

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
