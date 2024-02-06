"use client";
import {Chip} from '@mui/material'
import Image from "next/image";


export default function Home() {
  return (
    <main className="h-screen sm:bg-login-page-background bg-cover bg-purple">
      <header>
        <img src="/images/pesuFCLogo.png" alt="Logo"/>
      </header>
      <div className="bg-purple bg-opacity-80 mx-10 rounded-xl px-5 py-10 space-y-5">
        <p className="text-white text-3xl">Sign In</p>
        <p className="text-white">If you don't have an account register here</p>
        <div>
          <form className='space-y-5 self-center'>
            <div className="flex items-center border-b py-2 border-pink">
              <label className="text-white">
                Mobile Number:  
                <input type="number" className="bg-opacity-0 bg-purple border-none w-full text-pink mr-3 py-1 px-2 leading-tight focus:outline-none"  placeholder="Jane Doe"/>
              </label>
            </div>
            <div className="flex items-center border-b py-2 border-pink">
              <label className="text-white">
                OTP  
                <input type="password" className="bg-opacity-0 bg-purple border-none w-full text-pink mr-3 py-1 px-2 leading-tight focus:outline-none"  placeholder="Enter OTP"/>
              </label>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <input type="checkbox"/>
                <label className="align-middle text-pure-white">Rememeber me</label>
              </div>
              <div>
                <p className="align-middle text-dark-pink">Forgot Password</p>
              </div>
            </div>
            <div className='px-1'>
              <Chip label="Login" className='bg-dark-pink rounded-full text-white text-lg px-2 py-6 w-screen font-poppins'/>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}