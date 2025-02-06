"use client"
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import '../css/signup.css';
import { useContext } from 'react';
import { CartContext } from '../createContext';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function ShopPage() {
    const { addItemToCart } = useContext(CartContext);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);


    const handleClick = (index: any) => {
        console.log('button clicked')
        addItemToCart( products.products[index])
    }


    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('token');

                const response = await axios.get('http://127.0.0.1:3000/api/v1/product', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log('Products:', response.data);
                if (response.data.length === 0) {
                    setProducts(randomProducts);
                } else {
                    setProducts(response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                alert('Error fetching products!');
                setProducts(randomProducts);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            <div style={{marginBottom:20}} className="container p-8">
                <h5 style={{marginTop:10}} className="text-1xl font-bold">Products</h5>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className=" ul-card flex flex-wrap justify-center gap-6 max-w-800px mx-auto">
                {Array.isArray(products.products) &&
                    products.products.map((product, index) => (
                    <li
                    key={product._id}
                    className="flex flex-col justify-between bg-white shadow-md p-6 rounded-lg border border-gray-200 w-full sm:w-[calc(48%-1rem)]"
                    >
                    <div className="h-32 w-full flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
                    <Image
                    src={product.img}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="h-full w-auto object-contain"
                    />
                    </div>
                    <div className="flex flex-col space-y-3">
                    <span className="font-semibold text-xl">{product.name}</span>
                    <span className="text-base text-gray-600">Price: ${product.price}</span>
                    <span className="text-base text-gray-600">Quantity: {product.quantity}</span>
                    </div>
                    <button
                    className="mt-6 bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-brown-600 transition"
                    onClick={() => handleClick(index)}
                    >
                    Add to cart
                    </button>
                    </li>
                    ))}
                    </div>
                )}
            </div>
        </div>
    );
}