export default function Hero() {
  return (
    <div className="w-full h-lvh">
        <div 
            className="container flex flex-col text-center justify-center bg-[url('https://croft-next-ecommerce.s3.amazonaws.com/buttercrumbs-cake-hero.jpg')] bg-auto bg-no-repeat min-h-full rounded-b-sm"
        >
            <h1 className="text-3xl lg:text-4xl">Buttercrumbs Bakery</h1>
            <p 
                className="text-5xl lg:text-7xl uppercase text-[--textColor] tracking-wide"
            >
                Handmade Baked<br /> Goods and Pastries
            </p>
        </div>
    </div>
  )
}
