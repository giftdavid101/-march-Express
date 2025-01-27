import Image from "next/image";
export default function ShopPage() {

    return (
        <div className=" font-[family-name:var(--font-geist-sans)]">
            <div className="container p-8">
                <h6 className="text-2xl font-bold mb-6">Products</h6>
                <div className="grid grid-cols-3 gap-8">
                    {/* Product Cards */}
                    {Array(9)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
                            >
                                <div className="bg-gray h-100p">
                                    <Image
                                        src="https://res.cloudinary.com/gift101/image/upload/v1737604230/pngegg_12_y3d4b3.png"
                                        alt={`Product ${index + 1}`}
                                        width={150}
                                        height={150}
                                        className="w-full object-cover"
                                    />
                                </div>

                                <div className="p-4 w-full text-center">
                                    <h3 className="font-semibold text-lg mb-2">
                                        Product {index + 1}
                                    </h3>
                                    <p className="text-gray-500 text-sm">£20.00</p>
                                    <button className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-lg">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
        </div>
        </div>

    );
}