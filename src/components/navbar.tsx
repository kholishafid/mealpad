import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const nav = useRef<HTMLDivElement>(null)

  return (
    <nav className='p-4 transition bg-stone-2 h-20 flex items-center' ref={nav}>
      <div className='flex justify-between container max-w-5xl mx-auto'>
        <Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
          <img
            className='h-8 hidden md:block'
            src='/bowl.png'
            alt='Meal Pad Logo'
          />
          <span className='font-semibold font-sans text-xl'>Meal Pad</span>
        </Link>
        <Link to={'/bookmark'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
