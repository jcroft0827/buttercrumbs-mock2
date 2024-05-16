import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";
import NavExtraItems from "./NavExtraItems";

export default function Nav() {
    // State for Mobile Nav
    const [mobNav, setMobNav] = useState(false);
    // State for Extra Links
    const [extraLinks, setExtraLinks] = useState(false);

    // Change state of mobNav
    function mobileNav() {
        if (mobNav) {
            setMobNav(false);
        } else {
            setMobNav(true);
        }
    }
    // Change state of extraLinks
    function extraNavLinks() {
        if (extraLinks) {
            setExtraLinks(false);
        } else {
            setExtraLinks(true);
        }
    }


    return (
        <>
            {/* Desktop Nav */}
            <div className="z-10">
                {/* Nav Links */}
                <div className="hidden lg:flex gap-5 items-center">
                    <Link href={'/'} className="header-link">Home</Link>
                    <Link href={'/'} className="header-link">Lunch</Link>
                    <Link href={'/'} className="header-link">Cakes</Link>
                    <Link href={'/'} className="header-link">Cupcakes</Link>
                    {/* Button that shows or hides the extra nav links */}
                    <button
                        className="header-link flex items-end gap-1"
                        onClick={() => extraNavLinks()}
                    >
                        <span>More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">

                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" className={(extraLinks ? 'opacity-0' : 'opacity-100') + ' transition-opacity duration-200'} />


                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" className={(extraLinks ? 'opacity-100' : 'opacity-0') + ' transition-opacity duration-200'} />

                        </svg>
                    </button>
                </div>
                {/* This container is for the Mobile Nav Button */}
                <div className="lg:hidden">
                    {/* This button will either hide or show the Mobile Nav */}
                    <button
                        className="text-[--textColor]"
                        onClick={() => mobileNav()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            {/* This is the Bars icon which will only be visible when the Mobile Nav is closed */}
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" className={mobNav ? 'opacity-0' : 'opacity-100' + ' transition-opacity duration-700'} />
                            {/* This is the Close icon which will only be visible when the Mobile Nav is open */}
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" className={mobNav ? 'opacity-100' : 'opacity-0' + ' transition-opacity duration-700'} />
                        </svg>
                    </button>
                </div>
                {/* This is the extra links container */}
                <div className={(extraLinks ? 'top-14 right-0 left-0' : '-top-full') + ' flex absolute transition-all'}>
                    <NavExtraItems />
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={(mobNav ? 'top-14 right-0 left-0' : '-top-full') + ' flex absolute transition-all lg:-top-full'}>
                <MobileNav />
            </div>
        </>
    )
}