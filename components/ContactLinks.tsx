import { useTranslations } from 'next-intl';

import { EnvelopeIcon } from './icons/EnvelopeIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { PaperPlaneIcon } from './icons/PaperPlaneIcon';
import { PhoneIcon } from './icons/PhoneIcon';

const contactIconClassName = 'size-5 shrink-0';

const CONTACT_LINKS = [
  {
    id: 'email',
    href: 'mailto:slavoyarmc@gmail.com',
    label: 'slavoyarmc@gmail.com',
    external: false,
    Icon: EnvelopeIcon,
  },
  {
    id: 'phone',
    href: 'tel:+37493995810',
    label: '+374 93 995 810',
    external: false,
    Icon: PhoneIcon,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/iaroslav-zaprudskii/',
    label: 'linkedin.com/in/iaroslav-zaprudskii',
    external: true,
    Icon: LinkedInIcon,
  },
  {
    id: 'telegram',
    href: 'https://t.me/slavoyarmc',
    label: '@slavoyarmc',
    external: true,
    Icon: PaperPlaneIcon,
  },
] as const;

export function ContactLinks() {
  const t = useTranslations();

  return (
    <nav className='contact-list' aria-label={t('contact-nav')}>
      <ul className='contact-list__items'>
        {CONTACT_LINKS.map(({ id, href, label, external, Icon }) => (
          <li key={id}>
            <a
              className='contact-list__link'
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon className={contactIconClassName} />
              <span className='contact-list__label'>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
