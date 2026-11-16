'use client';

import { ContactLinks } from '@/components/ContactLinks';

type ContactBlockProps = {
  className?: string;
};

export function ContactBlock({ className }: ContactBlockProps) {
  return (
    <div className={className}>
      <ContactLinks />
    </div>
  );
}
