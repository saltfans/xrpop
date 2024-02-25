import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'XRPOP Top Shop',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <div className='w-full mx-auto text-center mt-8 text-3xl px-4'>
          <h1 className='text-3xl font-semibold '>Shop the Latest Trends at XRPOP</h1>
          <h2 className='text-xl text-gray-500'>Shop smarter with XRPOP! Enjoy exclusive discounts and special offers on our trendy products. Your savings adventure starts here.</h2>
        </div>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
