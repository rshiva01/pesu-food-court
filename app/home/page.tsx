import { HotelSharp, Logout, Person, ShoppingBag } from '@mui/icons-material';
import Vendor from './components/vendors';
import Link from 'next/link';
import Header from '../components/header';

export default function Home() {
  const vendors = [
    { name: 'PESU Food Court', imagesrc: './images/foodImage.png' },
    { name: 'Halli Mane', imagesrc: './images/foodImage.png' },
    { name: 'Cantina', imagesrc: './images/foodImage.png' },
  ];
  return (
    <main className='h-screen bg-purple'>
      <Header/>
      <div className='mx-[5vw] w-[90vw] overscroll-none sm:mt-[5vh] md:mt-[10vh]'>
        <ul className='justify-between md:flex'>
          {vendors.map((x) => (
            <div>
              <Vendor key={x.name} name={x.name} imagesrc={x.imagesrc} />
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
