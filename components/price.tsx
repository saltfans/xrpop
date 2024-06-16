import clsx from 'clsx';

const Price = ({
  amount,
  compareAtAmount,
  className,
  currencyCode = 'USD',
  currencyCodeClassName,
  sale,
}: {
  amount: string;
  compareAtAmount?: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
  sale?: boolean;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className}>
    {compareAtAmount && (
      <span className="line-through text-red-500 mr-2">
        {`${new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: currencyCode,
          currencyDisplay: 'narrowSymbol'
        }).format(parseFloat(compareAtAmount))}`}
      </span>
    )}
    <span>
      {new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol'
      }).format(parseFloat(amount))}
    </span>
    <span className={clsx('ml-1 inline', currencyCodeClassName)}>{`${currencyCode}`}</span>
    {sale && <span className="text-red-500 ml-1">Sale</span>}
  </p>
);

export default Price;
