import { useState } from 'react';
import MenuIcon from '../assets/icon/menu-1.svg'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState();

  return (
    <nav className='p-6 flex justify-between sticky top-0 bg-white z-1 '>
      <Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
        <img
          className='h-8'
          src='/bowl.png'
          alt='Meal Pad Logo'
        />
        <span className='font-semibold font-sans text-xl'>Meal Pad</span>
      </Link>
      <div className='flex items-center'>
        <img src={MenuIcon} alt="mealpad menu" />
        {/* <ul className='absolute h-screen w-screen bg-amber top-0 right-0'>
          <li>
            <Link to={'/'}>Home</Link>
            <Link to={'/Search'}>Search</Link>
            <Link to={'/Search'}>Favorites</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;