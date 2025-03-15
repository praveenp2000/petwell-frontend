
'use client'
import Header from "@/shared/components/header/header";
import "./globals.css";
import Footer from "@/shared/components/footer/footer";
import { usePathname  } from 'next/navigation';

export default function RootLayout({ children }) {

  const pathname = usePathname ();
  const hideLayout = pathname.startsWith('/admin') || pathname.startsWith('/signup');

  return (
    <html lang="en">
      <body>
        {<Header hideLayout={hideLayout}/>}
        {children}
        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
