'use client';

import './globals.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { GlobalStateProvider } from '../shared/components/globalState/GlobalStateProvider';
import Header from '../shared/components/header/header';
import Footer from '../shared/components/footer/footer';
import ChatBox from '../shared/components/chatbot/ChatBox';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [chatOpen, setChatOpen] = useState(false);
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


          <SmartToyIcon
            sx={{ height: 70, width: 70, backgroundColor: '#1989ce' }}
            onClick={() => setChatOpen(!chatOpen)}
            className="fixed bottom-10 right-2  text-white p-3 rounded-full shadow-lg cursor-pointer"
          />

          {chatOpen && <ChatBox closeChatBot={() => setChatOpen(false)} />}
        </GlobalStateProvider>
      </body>
    </html>
  );
}
