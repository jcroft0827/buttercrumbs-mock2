import NewItem from "./NewItem";

export default function NewItemsSection() {
  return (
    <div className="w-full bg-white">
      <div className="container py-20">
        <div className="border-b-4 border-[--lightBlue] border-dotted">
          <p className="text-7xl font-semibold text-[--darkColor] mb-10 ml-5">
            Now Serving
          </p>
        </div>
        <div className="flex flex-col items-center px-5 py-14 border-b-4 border-[--lightBlue] border-dotted gap-10 lg:gap-0 lg:justify-between lg:flex-row">

          <NewItem 
            img='https://croft-next-ecommerce.s3.amazonaws.com/buttercrumbs-cake.jpg'
            imgAlt='Buttercrumbs Bakery Wedding Cake'
            itemName='Wedding Cake'
            itemDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis totam non dolore, velit sint iusto debitis mollitia similique architecto nihil. Totam odio quaerat fugit dignissimos quos expedita esse unde ducimus'
            price='4.75'
          />

          <NewItem
            img='https://croft-next-ecommerce.s3.amazonaws.com/lemon-cupcakes-blackberry-frosting-2.jpg'
            imgAlt='Buttercrumbs Bakery Lemon Cupcakes with Blackberry Frosting'
            itemName='Lemon Cupcakes'
            itemDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis totam non dolore, velit sint iusto debitis mollitia similique architecto nihil. Totam odio quaerat fugit dignissimos quos expedita esse unde ducimus'
            price='3.75'
          />
        </div>
      </div>
    </div>
  )
}
