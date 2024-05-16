export default function AboutSection() {
  return (
    // About Section
    <div className="w-full">
        {/* About Section Container */}
        <div className="container py-20 px-10 flex flex-col justify-between items-start gap-10 lg:flex-row lg:gap-0">
            {/* About Section Information Container */}
            <div className="flex flex-col text-center w-full items-center lg:text-start lg:items-start lg:w-auto">
                {/* About Section Header */}
                <h2>About Us</h2>
                {/* About Section Information */}
                <p className="max-w-[500px] text-[--darkColor] text-lg tracking-wider">
                    Welcome to Buttercrumbs Bakery, where every bite tells a story of passion and tradition. Established in 2008, we've been delighting our community with the irresistible aroma of freshly baked goods for over a decade.
                </p>
            </div>

            {/* About Section Hours Container */}
            <div className="flex flex-col justify-center text-center items-center w-full lg:items-start lg:w-auto lg:text-start">
                {/* About Section Hours Header */}
                <p className="text-2xl uppercase mb-3 font-bold text-[--darkColor]">
                    Hours
                </p>
                {/* About Section Hours */}
                <p className="text-lg tracking-wide font-semibold text-[--darkColor]">
                    Mon - Fri: 6am - 4:30pm <br/>
                    Saturday: 6am - 2pm <br/>
                    Sunday: Usually 6am - 12pm
                </p>
            </div>

        </div>
    </div>
  )
}