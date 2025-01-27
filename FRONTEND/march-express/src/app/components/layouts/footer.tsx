
export default function Footer() {


    return (
        <footer className=" font-[family-name:var(--font-geist-sans)] bg-black text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">Engage with Us in Conversation.</h2>
                            <p className="mt-4 max-w-md">
                                In a global world based on communication, a brand must look beyond its borders...
                            </p>
                        </div>
                        <div className="flex space-x-8 mt-8 md:mt-0">
                            <div>
                                <h3 className="font-bold">About</h3>
                                <ul className="mt-4 space-y-2">
                                    <li>Our Story</li>
                                    <li>Store Locator</li>
                                    <li>Sustainability</li>
                                    <li>Careers</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold">Customer Service</h3>
                                <ul className="mt-4 space-y-2">
                                    <li>Prices and Payments</li>
                                    <li>Shipping</li>
                                    <li>Return Policy</li>
                                    <li>Terms of Service</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold">Social Media</h3>
                                <ul className="mt-4 space-y-2">
                                    <li>Instagram</li>
                                    <li>Facebook</li>
                                    <li>LinkedIn</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="font-bold">MarchEx</p>
                    </div>
                </div>


        </footer>
    );

}