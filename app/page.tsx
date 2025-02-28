import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import Face from '../app/assets/facebook.png';
import X from '../app/assets/x.png';
import YT from '../app/assets/yt.png';

const content = [
  {
    banner: 'https://d7rrqxjo6rxl7.cloudfront.net/growthbanner.webp',
    heading: 'Unlock Growth',
    description:
      'Unlocking a meaningful and successful life begins with the right education',
  },
  {
    banner: 'https://d7rrqxjo6rxl7.cloudfront.net/opportunitybanner.webp',
    heading: 'Unlock Opportunity',
    description:
      'When was the last time you truly invested in your future and saw the rewards?',
  },
  {
    banner: 'https://d7rrqxjo6rxl7.cloudfront.net/transformationbanner.webp',
    heading: 'Unlock Transformation',
    description:
      'If you’re looking for a platform to help you achieve your dreams, your search ends here.',
  },
];

export default function Home() {
  return (
    <main className='h-full w-full'>
      <Navbar />
      {content.map((section, index) => (
        <section
          key={index}
          style={{
            backgroundImage: `url(${section.banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className='h-screen w-full flex justify-center items-center'
        >
          <div className='flex justify-around gap-40 items-center mp:flex-col mp:items-start mp:pl-6'>
            <div className='flex flex-col gap-4'>
              <span className='text-white font-note w-fit mb-2 text-[0.875rem] inline-block cursor-pointer border-l-4 border-[#0373FF] px-2 h-7 hover:bg-[#0373FF] ease-in-out transition-all duration-300'>
                Coming Soon
              </span>
              <h1 className='text-[#F7F7F7] font-med text-[4rem] leading-[4rem] mp:text-[2.25rem] mp:leading-10'>
                {section.heading.split(' ').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h1>
            </div>
            <p className='text-[#F7F7F7] font-med text-[1.125rem] w-1/4 mp:text-[1.125rem] mp:w-3/4'>
              {section.description}
            </p>
          </div>
        </section>
      ))}
      <footer className='h-1/2 w-full bg-[#0373FF] flex justify-center items-center px-28 ml:px-10 tab:px-12 mp:flex-col mp:gap-12 mp:h-auto mp:px-4 mp:p-6'>
        <div className='flex flex-col items-start gap-14 w-1/2 mp:w-full mp:gap-8'>
          <Image
            src='https://d7rrqxjo6rxl7.cloudfront.net/footerlogo.png'
            alt='Logo'
            width={180}
            height={180}
          />
          <p className='text-[1.125rem] font-med text-[#F7F7F7]/50 w-4/5 mp:w-full mp:text-[0.9375rem]'>
            At Unlox Academy, we’re redefining education by focusing on the
            experience of learning. The initial idea was to make education more
            accessible, engaging, and life-changing, Unlox was created with one
            simple yet powerful core belief,
            <span className='text-[#F7F7F7]'> “Learning Made Easy.”</span>
          </p>
        </div>
        <div className='w-1/2 flex flex-col justify-between gap-20 mp:w-full mp:gap-4 mp:justify-start mp:items-start'>
          <div className='flex gap-8 items-center tab:flex-col tab:items-start ml:flex-col ml:items-start mp:flex-col-reverse mp:justify-center mp:items-start'>
            <Link
              href='https://www.instagram.com/unloxacademy?igsh=MW5oZDQ0eWg1bXE4&utm_source=qr'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex justify-center items-center gap-4'>
                <Image
                  src='https://d7rrqxjo6rxl7.cloudfront.net/Instagram.png'
                  alt='insta'
                  width={40}
                  height={40}
                />
                <h2 className='text-[1.5rem] font-med text-[#F7F7F7] mp:text-[1.125rem]'>
                  Instagram
                </h2>
              </div>
            </Link>
            <Link
              href='https://www.linkedin.com/company/unloxacademy/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex justify-center items-center gap-4'>
                <Image
                  src='https://d7rrqxjo6rxl7.cloudfront.net/linkedin.png'
                  alt='linkedin'
                  width={40}
                  height={40}
                />
                <h2 className='text-[1.5rem] font-med text-[#F7F7F7] mp:text-[1.125rem]'>
                  LinkedIn
                </h2>
              </div>
            </Link>
            <Link
              href='https://www.facebook.com/share/1K8Mu5TMk8/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex justify-center items-center gap-4'>
                <Image src={Face} alt='Facebook' width={40} height={40} />
                <h2 className='text-[1.5rem] font-med text-[#F7F7F7] mp:text-[1.125rem]'>
                  Facebook
                </h2>
              </div>
            </Link>
            <Link
              href='https://x.com/UNLOXACADEMY'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex justify-center items-center gap-4'>
                <Image src={X} alt='X' width={40} height={40} />
                <h2 className='text-[1.5rem] font-med text-[#F7F7F7] mp:text-[1.125rem]'>
                  Twitter
                </h2>
              </div>
            </Link>
            <Link
              href='https://www.youtube.com/@Unloxacademy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex justify-center items-center gap-4'>
                <Image src={YT} alt='X' width={40} height={40} />
                <h2 className='text-[1.5rem] font-med text-[#F7F7F7] mp:text-[1.125rem]'>
                  YT
                </h2>
              </div>
            </Link>
          </div>
          <div className='flex flex-col gap-4 mp:gap-2 w-full'>
            <h1 className='text-[1.25rem] font-med text-[#F7F7F7] mp:text-[1.125rem]'>
              Subscribe to our community
            </h1>
            <div className='flex gap-8 w-full mp:gap-2'>
              <input
                className='bg-[#F7F7F7] rounded-lg p-4 w-1/2 mp:w-3/4'
                type='text'
                placeholder='Email Address'
              />
              <button className='bg-[#F7F7F7] w-1/4 text-[#0373FF] text-center font-med rounded-lg p-4 mp:p-2 mp:text-[0.875rem]'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
