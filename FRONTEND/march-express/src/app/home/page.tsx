import '../css/signup.css'

export default function HomePage() {

    return (
        // <RootLayout>
        <div className=" font-[family-name:var(--font-geist-sans)]">
                <section className="hero h-96 text-white flex items-center justify-center text-center">
                    <div className="">

                        <div className={"overlay"}>
                            <h1 style={{color:'#e42424'}} className="text-4xl text-black font-bold">Contemporary</h1>
                            <p style={{color:'#9f1e4e'}} className="mt-4 text-lg text-white max-w-md mx-auto">
                                Crafting spaces that harmonize modern aesthetics with timeless elegance...
                            </p>
                            <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded">View More</button>
                        </div>

                    </div>
                </section>
                {/* Modern Minimalist Section */}
                <section className="my-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:space-x-8 align-center">
                            <div className="flex-1">
                                <img
                                    src="https://res.cloudinary.com/gift101/image/upload/v1737603015/Ultimate_Home_Decor_Guide__Room_Decor_Wall_Art_Storage_Solutions_and_More_kgyo0b.jpg"
                                    alt="Modern living room with large windows and minimalist decor"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold">Modern Minimalist</h2>
                                <div className="flex space-x-8 mt-4">
                                    <div>
                                        <h3 className="text-2xl font-bold">500+</h3>
                                        <p>Products</p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">20+</h3>
                                        <p>Projects</p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">50+</h3>
                                        <p>Satisfied Customers</p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">
                                            1<sup>st</sup>
                                        </h3>
                                        <p>Top in Paris</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Modern Style Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold">Modern Style Timeless Charm</h2>
                        <p className="mt-4 max-w-lg mx-auto">
                            Discover Poliform's 2024 preview, featuring sofas, chairs, and armchairs
                            embodying diverse lifestyle concepts...
                        </p>
                        <button className="mt-4 px-6 py-2 bg-black text-white rounded">
                            About Us
                        </button>
                    </div>
                </section>
                {/* Explore Collection Section */}
                <section className="my-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold">Explore Our Proudly Collection</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
                            <div className="bg-white p-4 rounded-lg shadow">
                                <img
                                    src="https://res.cloudinary.com/gift101/image/upload/v1737604230/pngegg_13_pmlqqr.png"
                                    alt="Elegant living room with modern design"
                                />
                                <h3 className="mt-4 font-bold">Mondrian</h3>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <img
                                    src="https://res.cloudinary.com/gift101/image/upload/v1737604231/pngegg_14_lmbjnb.png"
                                    alt="Spacious kitchen with modern cabinetry"
                                />
                                <h3 className="mt-4 font-bold">Nirnia</h3>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <img
                                    src="https://res.cloudinary.com/gift101/image/upload/v1737604230/pngegg_12_y3d4b3.png"
                                    alt="Stylish bedroom with open wardrobe design"
                                />
                                <h3 className="mt-4 font-bold">Artex</h3>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <img
                                    src="https://res.cloudinary.com/gift101/image/upload/v1737604229/pngegg_10_yvzo9n.png"
                                    alt="Cozy living room with wooden elements"
                                />
                                <h3 className="mt-4 font-bold">Brera</h3>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <img
                                    src="https://res.cloudinary.com/gift101/image/upload/v1737604955/pngegg_17_f8ipen.png"
                                    alt="Modern home office with sleek design"
                                />
                                <h3 className="mt-4 font-bold">Alea Pro</h3>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <img
                                    src="https://res.cloudinary.com/gift101/image/upload/v1737604955/pngegg_16_cbniys.png"
                                    alt="Luxurious bathroom with marble finishes"
                                />
                                <h3 className="mt-4 font-bold">Nirnia</h3>
                            </div>
                        </div>
                    </div>
                </section>

        </div>
        // </RootLayout>
    );
}