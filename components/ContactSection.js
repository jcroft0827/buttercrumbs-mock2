export default function ContactSection() {

    const contactLink = 'text-xl text-[--textColor] flex gap-2 items-center mb-2 hover:text-[--lightBlue]';

    return (
        // Contact Section
        <div className="w-full bg-[--darkColor]">
            {/* Contact Section Container */}
            <div className="container py-5 px-10 flex flex-col justify-between items-center text-center gap-10 md:text-start lg:flex-row">
                {/* Contact Section Information */}
                <div className="flex flex-col">
                    <h2 className="text-[--textColor] mb-0">
                        Contact Us
                    </h2>
                    <p className="text-xl font-semibold text-[--textColor] tracking-wider uppercase mb-6 md:text-2xl">
                        Welcome to our bakery/cafe!
                    </p>
                    <a href="/" className={contactLink}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <span>585-599-4550</span>
                    </a>
                    <a href="/" className={contactLink}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>13 E Main St, Corfu, NY 14036</span>
                    </a>
                    <a href="/" className={contactLink}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <span>buttercrumbsbakery13a@gmail.com</span>
                    </a>
                </div>
                {/* Contact Section Image */}
                <div 
                    className="w-full h-[300px] min-w-[300px] overflow-hidden rounded-md
                    bg-[url('https://croft-next-ecommerce.s3.amazonaws.com/lemon-cupcakes-blackberry-frosting-2.jpg')] bg-cover bg-no-repeat md:w-[600px] lg:w-[400px]"
                >
                </div>

            </div>
        </div>
    )
}
