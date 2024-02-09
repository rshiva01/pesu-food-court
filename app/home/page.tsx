import { Logout, Person, ShoppingBag } from '@mui/icons-material';

export default function Home() {
  return (
    <main className='h-screen bg-purple'>
      <header className='flex flex-row justify-between'>
        <div>
          <img src='/images/pesuFCLogo.png' className='h-[10vmin]' />
        </div>
        <div className='my-auto'>
          <Logout className='text-[5vmin] text-white' />
          <ShoppingBag className='text-[5vmin] text-white' />
          <Person className='text-[5vmin] text-white' />
        </div>
      </header>
    </main>
  );
}
