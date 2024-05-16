import Nav from "./Nav";

export default function Header() {
  return (
    <div className="w-full bg-[--darkColor]">
      <div className="w-full flex justify-between py-2 px-5">
        <div>
          <h1 className="text-3xl md:text-4xl">Buttercrumbs Bakery</h1>
        </div>
        <Nav />
      </div>
    </div>
  )
}
