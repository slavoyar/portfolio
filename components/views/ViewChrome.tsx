'use client';

import { LanguageToggleButton } from '@/components/HeaderActions';
import { useClock } from '@/hooks/useClock';

import { ResumeDownload } from './ResumeDownload';
import { ViewSwitcher } from './ViewSwitcher';

type ViewChromeProps = {
  showResume?: boolean;
  showClock?: boolean;
};

export function ViewChrome({ showResume = true, showClock = true }: ViewChromeProps) {
  const clock = useClock();

  return (
    <div className='view-chrome view-chrome--dark'>
      <ViewSwitcher className='view-chrome__switcher' />
      <div className='view-chrome__actions'>
        {showClock ? (
          <span className='view-chrome__clock' aria-live='polite'>
            {clock}
          </span>
        ) : null}
        <LanguageToggleButton />
        {showResume ? <ResumeDownload className='view-chrome__resume' /> : null}
      </div>
    </div>
  );
}
