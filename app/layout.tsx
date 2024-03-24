import Navbar from 'components/layout/navbar';
import { GeistSans } from 'geist/font/sans';
import { ensureStartsWith } from 'lib/utils';
import { ReactNode, Suspense } from 'react';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;


export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-gray-950 dark:text-white dark:selection:bg-pink-600 dark:selection:text-white">
        <div className="bg-white z-50 dark:bg-black text-black dark:text-white border-b border-gray-700 text-center py-2">
          🚚 (NL) Free Shipping on Orders Over €50! Shop now and enjoy complimentary shipping.
        </div>
        <Navbar />
        <Suspense>
          <main className='relative'>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
