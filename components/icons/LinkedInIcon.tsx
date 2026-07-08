import type { IconProps } from './IconProps';

export function LinkedInIcon(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      aria-hidden='true'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M7.5 8.25h3v7.5h-3v-7.5zM9 6.75a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zM16.5 15.75v-4.125c0-1.036-.84-1.875-1.875-1.875S12.75 10.589 12.75 11.625V15.75h-3v-7.5h3v1.054A3.375 3.375 0 0 1 16.5 8.25c1.864 0 3.375 1.512 3.375 3.375V15.75h-3z'
      />
    </svg>
  );
}
