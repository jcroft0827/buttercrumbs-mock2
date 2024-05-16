// Footer

export default function Footer() {
    const footerLink = 'text-lg mb-1 tracking-wide hover:text-[--lightBlue]';
    return (
        // Footer Section
        <div className="w-full bg-[--darkColor] text-[--textColor]">
            {/* Footer Container */}
            <div className="container flex flex-col items-center justify-between py-12 px-5 gap-10 md:flex-row md:items-start">
                {/* Footer Logo Container */}
                <div 
                    className="flex flex-col gap-5 items-end md:w-1/2 md:items-start"
                >
                    {/* Footer Logo */}
                    <h1 className="text-3xl xs:text-4xl">Buttercrumbs Bakery</h1>

                    {/* Footer Socials Container */}
                    <div className="flex gap-1">
                        {/* Location - Google Listing*/}
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </a>

                        {/* Facebook - Facebook Page */}
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40"
                                viewBox="0 0 48 48">
                                <path fill="#3F51B5"
                                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z">
                                </path>
                                <path fill="#FFF"
                                    d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Footer Links Container */}
                <div 
                    className="flex justify-evenly w-full md:justify-between md:pl-[50px] md:w-1/2"
                >

                    {/* Footer Food Links Container */}
                    <div
                        className="flex flex-col items-center"
                    >
                        {/* Footer Food Link Header */}
                        <p className="text-xl font-semibold uppercase tracking-wide mb-3">
                            Food Links
                        </p>

                        {/* Footer Food Links */}
                        <a href="/" className={footerLink}>
                            Lunch
                        </a>
                        <a href="/" className={footerLink}>
                            Cake
                        </a>
                        <a href="/" className={footerLink}>
                            Cupcakes
                        </a>
                        <a href="/" className={footerLink}>
                            Artisan Breads
                        </a>
                        <a href="/" className={footerLink}>
                            Pastries
                        </a>
                        <a href="/" className={footerLink}>
                            Pies
                        </a>
                        <a href="/" className={footerLink}>
                            Christmas Cookies
                        </a>
                    </div>

                    {/* Footer Other Links Container */}
                    <div
                        className="flex flex-col items-center"
                    >
                        {/* Footer Other Links Header */}
                        <p className="text-xl font-semibold uppercase tracking-wide mb-3">
                            Other Links
                        </p>

                        {/* Footer Other Links */}
                        <a href="/" className={footerLink}>
                            Gallery
                        </a>
                        <a href="/" className={footerLink}>
                            Find Us
                        </a>
                    </div>

                </div>


            </div>
        </div>
    )
}