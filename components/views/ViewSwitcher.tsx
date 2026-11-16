'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { DEFAULT_VIEW, isViewId, VIEW_IDS, type ViewId } from '@/lib/portfolio';

type ViewSwitcherProps = {
  className?: string;
};

function viewHref(view: ViewId) {
  return view === DEFAULT_VIEW ? '/' : `/?view=${view}`;
}

export function ViewSwitcher({ className }: ViewSwitcherProps) {
  const t = useTranslations('views');
  const searchParams = useSearchParams();
  const raw = searchParams.get('view');
  const active: ViewId = isViewId(raw) ? raw : DEFAULT_VIEW;

  return (
    <nav className={className} aria-label={t('label')}>
      <p className='view-switcher__label'>{t('label')}</p>
      <ul className='view-switcher__list'>
        {VIEW_IDS.map((view) => (
          <li key={view}>
            <Link
              href={viewHref(view)}
              scroll={false}
              className={['view-switcher__btn', active === view ? 'is-active' : ''].filter(Boolean).join(' ')}
              aria-current={active === view ? 'page' : undefined}
            >
              {t(view)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
