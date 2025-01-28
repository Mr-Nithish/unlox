import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <Navbar />
      <section className="bg-[url('https://d7rrqxjo6rxl7.cloudfront.net/growthbanner.webp')] bg-center bg-cover bg-no-repeat h-screen w-full flex justify-center items-center">
        <div className='flex justify-around gap-40 items-center mp:flex-col mp:items-start mp:pl-6'>
          <div>
            <span className='text-white mb-2 inline-block cursor-pointer border-l-4 border-[#0373FF] p-1 h-7 hover:bg-[#0373FF]'>
              Coming Soon
            </span>
            <h1 className='text-[#F7F7F7] text-[4rem] leading-[4rem] mp:text-[2.6rem] mp:leading-10'>
              Unlock <br /> Growth
            </h1>
          </div>
          <p className='text-[#F7F7F7] text-[1.50rem] w-1/4 mp:text-[1.3rem] mp:w-3/4'>
            Unlocking a meaningful and successful life begins with the right
            education
          </p>
        </div>
      </section>
      <section className="bg-[url('https://d7rrqxjo6rxl7.cloudfront.net/opportunitybanner.webp')] bg-center bg-cover bg-no-repeat h-screen w-full flex justify-center items-center">
        <div className='flex justify-around gap-40 items-center mp:flex-col mp:items-start mp:pl-6'>
          <div>
            <span className='text-white mb-2 inline-block cursor-pointer border-l-4 border-[#0373FF] p-1 h-7 hover:bg-[#0373FF]'>
              Coming Soon
            </span>
            <h1 className='text-[#F7F7F7] text-[4rem] leading-[4rem] mp:text-[2.6rem] mp:leading-10'>
              Unlock <br /> Opportunity
            </h1>
          </div>
          <p className='text-[#F7F7F7] text-[1.50rem] w-1/4 mp:text-[1.3rem] mp:w-3/4'>
            When was the last time you truly invested in your future and saw the
            rewards?
          </p>
        </div>
      </section>
      <section className="bg-[url('https://d7rrqxjo6rxl7.cloudfront.net/transformationbanner.webp')] bg-center bg-cover bg-no-repeat h-screen w-full flex justify-center items-center">
        <div className='flex justify-around gap-40 items-center mp:flex-col mp:items-start mp:pl-6'>
          <div>
            <span className='text-white mb-2 inline-block cursor-pointer border-l-4 border-[#0373FF] p-1 h-7 hover:bg-[#0373FF]'>
              Coming Soon
            </span>
            <h1 className='text-[#F7F7F7] text-[4rem] leading-[4rem] mp:text-[2.6rem] mp:leading-10'>
              Unlock <br /> Transformation
            </h1>
          </div>
          <p className='text-[#F7F7F7] text-[1.50rem] w-1/4 mp:text-[1.3rem] mp:w-3/4'>
            If you’re looking for a platform to help you achieve your dreams,
            your search ends here.
          </p>
        </div>
      </section>
      <footer className='h-1/2 w-full bg-[#0373FF] flex justify-center items-center px-28 ml:px-10 tab:px-12 mp:flex-col mp:gap-12 mp:h-auto mp:px-4 mp:p-6'>
        <div className='flex flex-col items-start gap-14 w-1/2 mp:w-full mp:gap-8'>
          <Image
            src='https://d7rrqxjo6rxl7.cloudfront.net/footerlogo.png'
            alt='Logo'
            width={100}
            height={100}
          />
          <p className='text-[1.2rem] text-[#F7F7F7]/50 w-4/5 mp:w-full'>
            At Unlox Academy, we’re redefining education by focusing on the
            experience of learning. The initial idea was to make education more
            accessible, engaging, and life-changing, Unlox was created with one
            simple yet powerful core belief,
            <span className='text-[#F7F7F7]'> “Learning Made Easy.”</span>
          </p>
        </div>
        <div className='w-1/2 flex flex-col justify-between gap-20 mp:w-full mp:gap-4 mp:justify-start mp:items-start'>
          <div className='flex gap-8 items-center tab:flex-col tab:items-start ml:flex-col ml:items-start mp:flex-col'>
            <a
              href='https://www.instagram.com/unloxacademy?igsh=MW5oZDQ0eWg1bXE4&utm_source=qr'
              target='_blank'
            >
              <div className='flex justify-center items-center gap-4'>
                <Image
                  src='https://d7rrqxjo6rxl7.cloudfront.net/insta.png'
                  alt='insta'
                  width={40}
                  height={40}
                />
                <h2 className='text-[1.75rem] text-[#F7F7F7] mp:text-[1.1rem]'>
                  Instagram
                </h2>
              </div>
            </a>
            <a
              href='https://www.linkedin.com/company/unloxedtech/'
              target='_blank'
            >
              <div className='flex justify-center items-center gap-4'>
                <Image
                  src='https://d7rrqxjo6rxl7.cloudfront.net/linkedin.png'
                  alt='linkedin'
                  width={40}
                  height={40}
                />
                <h2 className='text-[1.75rem] text-[#F7F7F7] mp:text-[1.1rem]'>
                  LinkedIn
                </h2>
              </div>
            </a>
          </div>
          <div className='flex flex-col gap-4 mp:gap-2'>
            <h1 className='text-[1.25rem] text-[#F7F7F7] mp:text-[1.1rem]'>
              Subscribe to our community
            </h1>
            <input
              className='bg-[#F7F7F7] rounded-lg p-4 w-1/2 mp:w-full'
              type='text'
              placeholder='Email Address'
            />
          </div>
        </div>
      </footer>
    </main>
  );
}
