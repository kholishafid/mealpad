import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  const { pathname } = useLocation()

  const routerActiveC = 'py-1 px-2  bg-black text-white w-full'
  return (
    <nav className='p-4 flex justify-between sticky top-0 bg-slate-1 z-1 '>
      <Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
        <img
          className='h-8 hidden md:block'
          src='/bowl.png'
          alt='Meal Pad Logo'
        />
        <span className='font-semibold font-sans text-xl'>Meal Pad</span>
      </Link>
      <div className='flex items-center'>
        <img
          className='h-9 bg-slate-2 rounded cursor-pointer border border-black p-0.5 md:hidden'
          src='/bowl.png'
          alt='Meal Pad Logo'
          onClick={() => setSidebarActive(true)}
        />
        <ul
          className={'md:(flex gap-4 font-sans font-medium) lg:text-lg ' + (sidebarActive === true ? 'fixed inset-y-0 left-1/3 right-0 bg-slate-1 p-8 text-3xl flex flex-col gap-4 items-end' : 'hidden')}
        >
          <li>
            <span
              className='ml-auto block w-fit md:hidden cursor-pointer'
              onClick={() => setSidebarActive(false)}
            >
              &#10005;
            </span>
          </li>
          <li>
            <Link to={'/'} className={pathname === '/' ? routerActiveC : ''}>Home</Link>
          </li>
          <li>
            <Link to={'/search'} className={pathname === '/search' ? routerActiveC : ''}>Search</Link>
          </li>
          <li>
            {/* <Link to={'/favorites'} className={pathname === '/favorites' ? routerActiveC : ''}>Favorites</Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;