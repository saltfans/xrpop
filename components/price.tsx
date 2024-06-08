import clsx from 'clsx';

const Price = ({
  amount,
  className,
  currencyCode = 'USD',
  currencyCodeClassName,
  sale,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
  sale?: boolean;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className}>
    {`${new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol'
    }).format(parseFloat(amount))}`}
    <span className={clsx('ml-1 inline', currencyCodeClassName)}>{`${currencyCode}`}</span>
    {sale && <span className="text-red-500 ml-1">Sale</span>}
  </p>
);

export default Price;
