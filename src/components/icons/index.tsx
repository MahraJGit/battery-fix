type IconProps = {
  className?: string;
};

export function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8.5 4.5h2.2l1.1 3.3-1.5 1.1a12.5 12.5 0 0 0 5.8 5.8l1.1-1.5 3.3 1.1v2.2c0 .9-.7 1.6-1.6 1.6C10.9 18.1 5.9 13.1 5.9 6.1c0-.9.7-1.6 1.6-1.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2.2A9.7 9.7 0 0 0 2.35 11.9c0 1.71.45 3.37 1.3 4.84L2.2 21.8l5.2-1.36a9.72 9.72 0 0 0 4.64 1.18h.01a9.7 9.7 0 0 0 9.69-9.7 9.66 9.66 0 0 0-9.7-9.72Zm0 17.74h-.01a8.05 8.05 0 0 1-4.1-1.12l-.29-.17-3.08.81.82-3-.19-.31a8.05 8.05 0 0 1-1.24-4.3 8.08 8.08 0 0 1 8.08-8.08 8.05 8.05 0 0 1 8.07 8.08 8.08 8.08 0 0 1-8.06 8.09Zm4.43-6.04c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LightningIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.2 2.5 5.8 13.2h5.1l-1.2 8.3 8.2-11.4h-5.3l1.6-7.6Z" />
    </svg>
  );
}

export function WrenchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.5 6.2a3.8 3.8 0 0 0-5.1 4.4L4.2 15.8a1.9 1.9 0 1 0 2.7 2.7l5.2-5.2a3.8 3.8 0 0 0 4.4-5.1l-2.1 2.1-1.8-1.8 2-2.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BatteryIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="7" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M17.5 10h2.2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m9 12 1.4-2.5h1.2L10.2 12H12l-1.4 2.5H9.4L10.8 12H9Z" fill="currentColor" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="m12 3.4 2.5 5.1 5.6.8-4 3.9.9 5.6L12 16.2 6.9 18.8l.9-5.6-4-3.9 5.6-.8L12 3.4Z" />
    </svg>
  );
}

export function ChevronIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="m7 10 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
