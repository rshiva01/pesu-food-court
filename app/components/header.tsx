import Link from "next/link";
import { Logout, ShoppingBag, Person } from "@mui/icons-material";

const Header = () => {
  return (
    <header className='flex flex-row justify-between'>
      <div>
        <Link href={'/home'}>
          <img src='/images/pesuFCLogo.png' className='h-[10vmin]' />
        </Link>
      </div>
      <div className='my-auto'>
        <Logout className='mr-[2vw] text-[5vmin] text-white' />
        <ShoppingBag className='text-[5vmin] text-white' />
        <Person className='ml-[2vw] mr-[1.5vw] text-[5vmin] text-white' />
      </div>
    </header>
  );
};

export default Header