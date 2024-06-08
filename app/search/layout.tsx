import Background from 'components/layout/background';
import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (<>

    <Suspense>
      <div className="mx-auto relative h-full flex max-w-screen-2xl flex-col gap-8  text-black dark:text-white md:flex-row dark:bg-black border-b-2 border-cyan-500 overflow-hidden">
      <Background />
        <div className="order-first z-10 sticky left-0 w-full flex-none md:max-w-[140px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full mt-8  md:order-none">{children}</div>
        <div className="order-none z-10 sticky right-0 flex-none md:order-last md:w-[140px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
      <Footer />
    </Suspense>
    </>
  );
}
