import Image from "next/image";
export default function ShopPage() {

    return (
        <div className=" font-[family-name:var(--font-geist-sans)]">
            <div className="container p-8">
                <h1 className="text-3xl font-bold mb-6">Shop</h1>
                <div className="grid grid-cols-3 gap-8">
                    {/* Product Cards */}
                    {Array(9)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
                            >
                                <Image
                                    src={`https://res.cloudinary.com/gift101/image/upload/v1737604230/pngegg_13_pmlqqr.png+${index + 1}`}
                                    alt={`Product ${index + 1}`}
                                    width={150}
                                    height={150}
                                    className="w-full object-cover"
                                />
                                <div className="p-4 w-full text-center">
                                    <h3 className="font-semibold text-lg mb-2">
                                        Product {index + 1}
                                    </h3>
                                    <p className="text-gray-500 text-sm">£20.00</p>
                                    <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg">
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