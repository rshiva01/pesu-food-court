import { HotelSharp, Logout, Person, ShoppingBag } from '@mui/icons-material';
import Vendor from './components/vendors';

export default function Home() {
  const vendors = [
    { name: 'PESU Food Court', imagesrc: './images/foodImage.png' },
    { name: 'Halli Mane', imagesrc: './images/foodImage.png' },
    { name: 'Cantina', imagesrc: './images/foodImage.png' },
  ];
  return (
    <main className='h-screen bg-purple'>
      <header className='flex flex-row justify-between'>
        <div>
          <img src='/images/pesuFCLogo.png' className='h-[10vmin]' />
        </div>
        <div className='my-auto'>
          <Logout className='mr-[2vw] text-[5vmin] text-white' />
          <ShoppingBag className='text-[5vmin] text-white' />
          <Person className='ml-[2vw] mr-[1.5vw] text-[5vmin] text-white' />
        </div>
      </header>
      <div className='mx-[5vw] w-[90vw] sm:mt-[5vh] md:mt-[10vh]'>
        <ul className='justify-between md:flex'>
          {vendors.map((vendor) => (
            <div>
              <Vendor
                key={vendor.name}
                name={vendor.name}
                imagesrc={vendor.imagesrc}
              />
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
