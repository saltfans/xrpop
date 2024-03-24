import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Background from 'components/layout/background';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';
import { getMetadata } from './metadata';

export const runtime = 'edge';
const metadata = getMetadata();
export default async function HomePage() {
  return (
    <>
      <div><Background /></div>
      <div className='w-full mx-auto z-50 text-center mt-8 text-3xl px-4'>
          <h1 className='text-3xl font-semibold '>Shop with awesome prices at XRPOP</h1>
          <h2 className='text-xl text-gray-500'>Products with reviews from sellers only from XRPOP!<br/> Your savings adventure starts here.</h2>
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
