// New Item Box - This will show on the home screen under the NewItemsSection

const NewItem = ({ img, imgAlt, itemName, itemDesc, price }) => {
    return (
        <div className="flex flex-col">

            {/* Product Image Container */}
            <div
                className="max-w-[600px] max-h-[400px] overflow-hidden rounded-sm mb-3 lg:max-w-[400px]"
            >
                {/* Product Image */}
                <img src={img} alt={imgAlt} />
            </div>

            <div className="flex justify-between items-end lg:flex-col">

                {/* Product Details Container */}
                <div className="mb-10">
                    {/* Product Name */}
                    <h3>{itemName}</h3>
                    {/* Product Description */}
                    <p
                        className="max-w-[400px] text-xl tracking-wider"
                    >
                        {itemDesc}
                    </p>
                </div>

                {/* Product Price Container */}
                <div className="flex justify-end md:pb-10 lg:pb-0">
                    {/* Product Price */}
                    <p className="text-2xl font-semibold">
                        ${price}
                    </p>
                </div>

            </div>

        </div>
    );
};

export default NewItem;