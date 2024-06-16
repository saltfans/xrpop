import clsx from 'clsx';
import { CiDiscount1 } from "react-icons/ci";

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
  <div className={clsx(
    'text-lg', // Base text-lg class
    'flex', // Flexbox container to center items
    'justify-center', // Center horizontally
    'items-center', // Center vertically
    'font-semibold',
    className // Additional className passed from props
  )}>
  <p suppressHydrationWarning={true} className={className}>
      <span>
        {new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: currencyCode,
          currencyDisplay: 'narrowSymbol'
        }).format(parseFloat(amount))}
      </span>
      <span className={clsx('ml-1 inline', currencyCodeClassName)}>{`${currencyCode}`}</span>
      
      {compareAtAmount && (
        <span className="line-through text-red-800 ml-1">
          {`${new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: currencyCode,
            currencyDisplay: 'narrowSymbol'
          }).format(parseFloat(compareAtAmount))}`}
        </span>
      )}
      {sale && (
        <span className={clsx('text-white ml-1', currencyCodeClassName)}>
          <CiDiscount1 className='inline-block font-extrabold align-middle text-3xl' />
        </span>
      )}
  </p>
  </div>
);

export default Price;
