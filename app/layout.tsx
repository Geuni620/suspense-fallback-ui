import './globals.css';

import Nav from 'app/Nav';
import QueryContext from 'components/client/common/QueryContext';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <QueryContext>
          <main style={{ height: '100dvh' }} className="mx-auto max-w-[768px]">
            <Nav />
            {children}
          </main>
        </QueryContext>
      </body>
    </html>
  );
}
