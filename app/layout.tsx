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
  title: 'Education Organization',
  description:
    'Join our online courses for career growth, industry-specific training, and technology upskilling programs. Flexible and interactive digital learning for students and professionals.',
  keywords: [
    'edutech company',
    'online courses',
    'domain-specific courses',
    'digital learning for professionals',
    'online education for students',
    'skill enhancement courses',
    'online learning platform',
    'industry-specific training',
    'flexible learning',
    'virtual learning platform',
    'career growth',
    'job-oriented courses',
    'technology training',
    'upskilling programs',
    'blended learning solutions',
    'interactive online courses',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='keywords'
          content='edutech company, online courses, domain-specific courses, digital learning for professionals, online education for students, skill enhancement courses, online learning platform, industry-specific training, flexible learning, virtual learning platform, career growth, job-oriented courses, technology training, upskilling programs, blended learning solutions, interactive online courses'
        />
      </head>
      <body
        className={`${robotoStrong.variable} ${robotoNote.variable} ${robotoMed.variable} ${robotoThink.variable} antialiased`}
        aria-label='Education organization providing online learning and upskilling courses'
      >
        {children}
      </body>
    </html>
  );
}
