import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconWave(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M3 16c1.2-1.4 2.4-2 3.6-2s2.4.6 3.6 2 2.4 2 3.6 2 2.4-.6 3.6-2 2.4-2 3.6-2" />
      <path d="M3 10c1.2-1.4 2.4-2 3.6-2s2.4.6 3.6 2 2.4 2 3.6 2 2.4-.6 3.6-2 2.4-2 3.6-2" />
    </svg>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconChevronLeft(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="m15 6-6 6 6 6" />
    </svg>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M14.5 8.5h2V5.2c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.78-4.92 5.06v2.6H5.9v3.68h2.73V21h3.72v-4.61h2.83l.45-3.68h-3.28v-2.24c0-1.06.29-1.97 1.15-1.97Z" />
    </svg>
  );
}

export function IconDroplet(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M12 3s6 6.6 6 10.8A6 6 0 1 1 6 13.8C6 9.6 12 3 12 3Z" />
    </svg>
  );
}

export function IconLayout(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17" />
      <path d="M9 9.5V20" />
    </svg>
  );
}

export function IconTag(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M11.5 3.5H6a2.5 2.5 0 0 0-2.5 2.5v5.5c0 .5.2 1 .6 1.4l8.5 8.5a2 2 0 0 0 2.8 0l5.5-5.5a2 2 0 0 0 0-2.8l-8.5-8.5c-.4-.4-.9-.6-1.4-.6Z" />
      <circle cx="8.2" cy="8.2" r="1.3" />
    </svg>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M12 3.5 5 6v5.5c0 4.6 3 8 7 9.5 4-1.5 7-4.9 7-9.5V6l-7-2.5Z" />
      <path d="m9.2 12.2 2 2 3.6-4" />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6.5 6.5 2.5 2.5M15 15l2.5 2.5M6.5 17.5 9 15M15 9l2.5-2.5" />
    </svg>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9 6.5v11l9-5.5-9-5.5Z" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M6.6 3.5 9 5.9c.4.4.5 1 .2 1.5L7.8 9.7a12 12 0 0 0 6.5 6.5l2.3-1.4c.5-.3 1.1-.2 1.5.2l2.4 2.4c.5.5.5 1.3 0 1.7l-1.5 1.5c-.6.6-1.4.9-2.2.7-4.2-.9-8.6-4.4-11-11-.2-.8.1-1.6.7-2.2l1.5-1.5c.5-.5 1.3-.5 1.7 0Z" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M12 21s7-6.3 7-11.5a7 7 0 1 0-14 0C5 14.7 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
