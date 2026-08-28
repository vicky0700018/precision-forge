type Props = { className?: string };

const wrap = (children: React.ReactNode) =>
  function Icon({ className = "h-6 w-6" }: Props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        {children}
      </svg>
    );
  };

export const Icons = {
  turning: wrap(
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>,
  ),
  vmc: wrap(
    <>
      <path d="M4 4h16v6H4z" />
      <path d="M12 10v5M8 20h8M9 15h6l1 5H8z" />
    </>,
  ),
  grinding: wrap(
    <>
      <path d="M3 17h18M6 17V9a6 6 0 0 1 12 0v8" />
      <path d="M9 13h6" />
    </>,
  ),
  hydraulic: wrap(
    <>
      <rect x="3" y="9" width="10" height="8" rx="1.5" />
      <path d="M13 13h5a3 3 0 0 0 3-3V6M8 9V5" />
    </>,
  ),
  assembly: wrap(
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <path d="M10 6.5h4a3.5 3.5 0 0 1 3.5 3.5v4" />
    </>,
  ),
  inspection: wrap(
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.5-4.5M8 10.5h5" />
    </>,
  ),
  factory: wrap(
    <>
      <path d="M3 20V10l6 4V10l6 4V6h6v14z" />
      <path d="M3 20h18" />
    </>,
  ),
  custom: wrap(
    <>
      <path d="M14.5 3.5a5 5 0 0 0-6.4 6.4L3 15v6h6l5.1-5.1a5 5 0 0 0 6.4-6.4l-3.2 3.2-3-3z" />
    </>,
  ),
  people: wrap(
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 5.5a3.2 3.2 0 0 1 0 6M17 14.5a6.5 6.5 0 0 1 4.5 5.5" />
    </>,
  ),
  growth: wrap(
    <>
      <path d="M3 19h18M6 16V9M11 16V5M16 16v-5M21 16v-8" />
    </>,
  ),
  shield: wrap(
    <>
      <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>,
  ),
  truck: wrap(
    <>
      <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>,
  ),
  handshake: wrap(
    <>
      <path d="m3 12 4-4 5 3 5-3 4 4-5 6-4-3-4 3z" />
    </>,
  ),
  pin: wrap(
    <>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>,
  ),
  phone: wrap(
    <>
      <path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 3z" />
    </>,
  ),
  mail: wrap(
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>,
  ),
  clock: wrap(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>,
  ),
  target: wrap(
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>,
  ),
  gauge: wrap(
    <>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="m12 13 4-3" />
      <path d="M4 17h16" />
    </>,
  ),
  award: wrap(
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 14-1.5 7 5-2.5 5 2.5-1.5-7" />
    </>,
  ),
  building: wrap(
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h6v6H9z" />
    </>,
  ),
  calendar: wrap(
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>,
  ),
  menu: wrap(<path d="M4 7h16M4 12h16M4 17h16" />),
  close: wrap(<path d="M18 6 6 18M6 6l12 12" />),
  arrow: wrap(<path d="M5 12h14M13 6l6 6-6 6" />),
  check: wrap(<path d="m5 13 4 4L19 7" />),
  grid: wrap(
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </>,
  ),
};

export type IconName = keyof typeof Icons;

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = Icons[(name as IconName) in Icons ? (name as IconName) : "grid"];
  return <Cmp className={className} />;
}
