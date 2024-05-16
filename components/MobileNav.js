import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {

  // This will hold the state of the extra nav links being visible
  const [mobileMore, setMobileMore] = useState(false);

  // This function will show and hide the extra nav links
  function mobileNavMore() {
    if (mobileMore) {
      setMobileMore(false);
    } else {
      setMobileMore(true);
    }
  }

  return (
    <div className='bg-[--darkColor] text-[--textColor] flex flex-col w-full lg:hidden'>

      {/* Nav Links */}
      <Link href={'/'} className="header-link px-5 py-2">Home</Link>
      <Link href={'/'} className="header-link px-5 py-2">Lunch</Link>
      <Link href={'/'} className="header-link px-5 py-2">Cakes</Link>
      <Link href={'/'} className="header-link px-5 py-2">Cupcakes</Link>
      {/* Button that will show the extra nav links */}
      <button
        className="header-link px-5 py-2 flex items-end gap-1"
        onClick={() => mobileNavMore()}
      >
        <span>More</span>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
          className="w-6 h-6"
        >
          {/* The arrow(chevron) will change depending on the state of the extra nav links being visible */}
          {/* The down arrow(chevron-down) */}
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" className={(mobileMore ? 'opacity-0' : 'opacity-100') + ' transition-all duration-200'}/>
          {/* The up arrow(chevron-up) */}
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" className={(mobileMore ? 'opacity-100' : 'opacity-0') + ' transition-all duration-200'}/>
        </svg>
      </button>
      
      {/* Extra nav links */}
      <div className={(mobileMore ? 'flex' : 'hidden') + " flex-col"}>
        <Link href={'/'} className="header-link px-5 py-2">Artisan Breads</Link>
        <Link href={'/'} className="header-link px-5 py-2">Gallery</Link>
        <Link href={'/'} className="header-link px-5 py-2">Pastry</Link>
        <Link href={'/'} className="header-link px-5 py-2">Pies</Link>
        <Link href={'/'} className="header-link px-5 py-2">Find Us</Link>
        <Link href={'/'} className="header-link px-5 py-2">Christmas Cookies</Link>
      </div>
    </div>
  )
}
