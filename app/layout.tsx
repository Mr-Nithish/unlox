import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const robotoStrong = localFont({
  src: '../fonts/ppneuemontreal-bold.woff',
  variable: '--font-roboto-strong',
});

const robotoNote = localFont({
  src: '../fonts/ppneuemontreal-book.woff',
  variable: '--font-roboto-note',
});

const robotoMed = localFont({
  src: '../fonts/ppneuemontreal-medium.woff',
  variable: '--font-roboto-med',
});

const robotoThink = localFont({
  src: '../fonts/ppneuemontreal-thin.woff',
  variable: '--font-roboto-think',
});

export const metadata: Metadata = {
  title: 'Education organisation',
  description: 'Learn Easly',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${robotoStrong.variable} ${robotoNote.variable} ${robotoMed.variable} ${robotoThink.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
