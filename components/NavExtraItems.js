import Link from "next/link";

export default function NavExtraItems() {
  return (
    <div className='bg-[--darkColor] text-[--textColor] flex flex-col w-full'>
        <Link href={'/'} className="header-link px-5 py-2">
            Artisan Breads
        </Link>
        <Link href={'/'} className="header-link px-5 py-2">
            Gallery
        </Link>
        <Link href={'/'} className="header-link px-5 py-2">
            Pastry
        </Link>
        <Link href={'/'} className="header-link px-5 py-2">
            Pies
        </Link>
        <Link href={'/'} className="header-link px-5 py-2">
            Find Us
        </Link>
        <Link href={'/'} className="header-link px-5 py-2">
            Christmas Cookies
        </Link>
    </div>
  )
}