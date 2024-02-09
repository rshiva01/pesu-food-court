'use client';
import { Chip } from '@mui/material';
import Image from 'next/image';

export default function Login() {
  return (
    <main className='h-screen bg-purple bg-cover sm:bg-login-page-background'>
      <header>
        {/* <img src="/images/pesuFCLogo.png" alt="Logo"/> */}
        {/* <Image src={'/images/pesuFCLogo.png'} alt='Logo' width={107} height={80}/> */}
        <img src='/images/pesuFCLogo.png' className='h-[10vmin]' />
      </header>
      <div className='content-normal px-10 md:flex md:flex-row md:justify-evenly'>
        <div className='md:display-inline-block space-y-5 justify-self-center rounded-xl bg-purple bg-opacity-80 px-5 py-10 md:max-h-[80vh] md:max-w-[25vw]'>
          <p className='text-[3.7vh] text-white'>Sign In</p>
          <p className='text-[2.2vh] text-white'>
            If you don't have an account register here
          </p>
          <div>
            <form className='space-y-5 self-center'>
              <div className='flex items-center border-b border-pink py-2'>
                <label className='text-[1.75vh] text-white'>
                  Mobile Number:
                  <input
                    type='number'
                    className='mr-3 w-full border-none bg-purple bg-opacity-0 px-2 py-1 text-[1.75vh] leading-tight text-pink focus:outline-none'
                    placeholder='Enter mobile number'
                  />
                </label>
              </div>
              <div className='flex items-center border-b border-pink py-2'>
                <label className='text-[1.75vh] text-white'>
                  OTP
                  <input
                    type='password'
                    className='mr-3 w-full border-none bg-purple bg-opacity-0 px-2 py-1 text-[1.75vh] leading-tight text-pink focus:outline-none'
                    placeholder='Enter OTP'
                  />
                </label>
              </div>
              <div className='flex flex-row justify-between'>
                <div>
                  <input type='checkbox' />
                  <label className='pl-2 align-middle text-[1.6vh] text-pure-white'>
                    Rememeber me
                  </label>
                </div>{' '}
                <div>
                  <p className='align-middle text-[1.6vh] text-dark-pink'>
                    Forgot Password
                  </p>
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
        <div className='justify-center rounded-2xl bg-burgundy px-[4vh] py-[4vh] sm:hidden'>
          <img src='/images/foodImage.png' className='h-[60vh]' />
          <div className='pt-[4vh] text-white'>
            <p className='text-[3.7vh]'>Sign into PESU Food Court</p>
            <p className='text-[2.2vh]'>Ordering made easy.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
