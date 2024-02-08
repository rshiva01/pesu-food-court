'use client';
import { Chip } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='h-screen bg-purple bg-cover sm:bg-login-page-background'>
      <header>
        {/* <img src="/images/pesuFCLogo.png" alt="Logo"/> */}
        {/* <Image src={'/images/pesuFCLogo.png'} alt='Logo' width={107} height={80}/> */}
        <img src='/images/pesuFCLogo.png'/>
      </header>
      <div className='content-normal px-10 md:flex md:flex-row md:justify-evenly'>
        <div className='space-y-5 justify-self-center rounded-xl bg-purple bg-opacity-80 px-5 py-10 md:max-h-[80vh] md:max-w-[25vw] md:display-inline-block'>
          <p className='text-[3.7vh] text-white'>Sign In</p>
          <p className='text-white text-[2.2vh]'>
            If you don't have an account register here
          </p>
          <div>
            <form className='space-y-5 self-center'>
              <div className='flex items-center border-b border-pink py-2'>
                <label className='text-white text-[1.75vh]'>
                  Mobile Number:
                  <input
                    type='number'
                    className='mr-3 w-full border-none bg-purple bg-opacity-0 px-2 py-1 leading-tight text-pink text-[1.75vh] focus:outline-none'
                    placeholder='Enter mobile number'
                  />
                </label>
              </div>
              <div className='flex items-center border-b border-pink py-2'>
                <label className='text-white text-[1.75vh]'>
                  OTP
                  <input
                    type='password'
                    className='mr-3 w-full border-none bg-purple bg-opacity-0 px-2 py-1 leading-tight text-pink text-[1.75vh] focus:outline-none'
                    placeholder='Enter OTP'
                  />
                </label>
              </div>
              <div className='flex flex-row justify-between'>
                <div>
                  <input type='checkbox' />
                  <label className='pl-2 align-middle text-pure-white text-[1.6vh]'>
                    Rememeber me
                  </label>
                </div>{' '}
                <div>
                  <p className='align-middle text-dark-pink text-[1.6vh]'>Forgot Password</p>
                </div>
              </div>
              <div className='px-[1.1vh]'>
                <Chip
                  label='Login'
                  className='w-screen rounded-full bg-dark-pink py-[2.5vh] font-poppins text-[2.2vh] text-white'
                />
              </div>
            </form>
          </div>
        </div>
        {/* <div className='sm:hidden object-fit bg-burgundy px-10 py-20 rounded-2xl w-5/6 h-3/6 aspect-auto' > */}
        <div className='rounded-2xl bg-burgundy px-[4vh] py-[4vh] justify-center sm:hidden'>
          <img src='/images/foodImage.png' className='h-[55vh]'/>
          
          {/* <Image className='object-contain scale-75' src={'/images/foodImage.png'} alt='image' width={791} height={493}/> */}
          {/* <Image className='object-contain' src={'/images/foodImage.png'} alt='image' width={791} height={593} style={{objectFit:'cover', width:'100%', height:'100%'}}/> */}
          {/* <Image src={'/imaes/foodImage.png'} alt='' layout='fill' objectFit='cover' style={{maxWidth:'100%', maxHeight:'100%'}}/> */}
          <div className='pt-[4vh] text-white'>
            <p className='text-[3.7vh]'>Sign into PESU Food Court</p>
            <p className='text-[2.2vh]'>Ordering made easy.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
