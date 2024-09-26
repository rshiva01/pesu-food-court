"use client"

import Vendor from './components/vendors';
import Header from '../components/header';
import { useEffect, useState } from 'react';

async function fetchVendors() {
  const response = await fetch('http://localhost:8000/vendor');
  const data = await response.json();
  return data;
}

function useVendors() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchVendors().then((data) => {
      setVendors(data);
    });
  }, []);

  return vendors;
}



export default function Home() {
  const vendors = useVendors();
  return (
    <main className='h-screen bg-purple'>
      <Header/>
      <div className='mx-[5vw] w-[90vw] overscroll-none sm:mt-[5vh] md:mt-[10vh]'>
        <ul className='justify-between md:flex'>
          {vendors.map((vendor) => (
            <li key={vendor.vendor_id}>
              <Vendor name={vendor.vendor_name} imagesrc={"../images/foodImage.png"} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}