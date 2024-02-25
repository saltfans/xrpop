import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 32 32"
      {...props}
      className={clsx('h-4 w-4 fill-black dark:fill-cyan-500', props.className)}
    >
      {/* Diagonal line from top-left to bottom-right */}
      <path d="M0 0L32 32" stroke="cyan" strokeWidth="2" />

      {/* Diagonal line from top-right to bottom-left */}
      <path d="M32 0L0 32" stroke="cyan" strokeWidth="4" />
    </svg>
  );
}
