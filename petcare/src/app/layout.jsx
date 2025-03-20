'use client';
import Header from '@/shared/components/header/header';
import './globals.css';
import Footer from '@/shared/components/footer/footer';
import { usePathname } from 'next/navigation';
import { GlobalStateProvider } from '@/shared/components/globalState/GlobalStateProvider';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideLayout =
    pathname.startsWith('/admin') ||
    pathname.startsWith('/seller') ||
    pathname.startsWith('/doctor') ||
    pathname.startsWith('/customer') ||
    pathname.startsWith('/signup');

  return (
    <html lang='en'>
      <body>
        <GlobalStateProvider>
          {<Header hideLayout={hideLayout} />}
          {children}
          {!hideLayout && <Footer />}
        </GlobalStateProvider>
      </body>
    </html>
  );
}
