'use client'
import "../css/signup.css"
import {ChangeEvent, FormEvent, useState, useEffect} from "react";
import { usePathname} from "next/navigation";
import axios from "axios";
import Image from "next/image";

interface FormData {
    name: string;
    price: number;
    quantity: number;
    img: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    img: string;
}




const randomProducts = [
    {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        quantity: 10,
        image: 'https://picsum.photos/200/300',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 9.99,
        quantity: 20,
        image: 'https://picsum.photos/200/301',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 12.99,
        quantity: 15,
        image: 'https://picsum.photos/200/302',
    },
];

export default function AdminPage() {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        img:'',
        name: '',
        price: 0,
        quantity: 0,
    });

    const [products, setProducts] = useState<Product[]>([]);

    const pathname = usePathname();

    if (pathname === '/admin') {
        const email = 'iceberg31@coupleedu.com';
        const password = 'iceberg31';

        // Generate the token
        const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64');

        // Set the token in the Axios headers
        axios.defaults.headers.common.Authorization = `Basic ${token}`;
    }


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
            // const email = 'iceberg31@coupleedu.com';
            // const password = 'iceberg31';

            // Generate the token
            // const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64');

            // Set the token in the Axios headers
            // axios.defaults.headers.common.Authorization = `Basic ${token}`;
            // console.log('Axios headers:', axios.defaults.headers);
            try {
                const token = localStorage.getItem('token'); // Retrieve the token from local storage

                // Set the token in the Axios headers
                axios.defaults.headers.common.Authorization = `Bearer ${token}`;

                const response = await axios.post('http://127.0.0.1:3000/api/v1/product', formData);
                console.log('Product added:', response.data);
                alert('Product added successfully!');

            // ...
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product!');
        } finally {
            setLoading(false);
        }
    };


    const handleDelete = async (productId: string) => {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.delete(`http://127.0.0.1:3000/api/v1/product/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Product deleted:', response.data);
            alert('Product deleted successfully!');
            // Update products list
            const newProducts = products.products.filter(product => product._id !== productId);
            setProducts({ ...products, products: newProducts });
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Error deleting product!');
        }
    };

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
        <div className=" admin font-[family-name:var(--font-geist-sans)]">
            <div className="sign-up-style">
                <div className="sign-up container">
                    <div className={'form-con'}>
                        <h2>Add Product</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={'input-field'}>
                                <label htmlFor={'name'}>Product Name</label>
                                <input
                                    id={'name'}
                                    name={'name'}
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={'input-field'}>
                                <label htmlFor={'name'}>Product img</label>
                                <input
                                    id={'img'}
                                    name={'img'}
                                    value={formData.img}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={'input-field'}>
                                <label htmlFor={'price'}>Price</label>
                                <input
                                    id={'price'}
                                    name={'price'}
                                    value={formData.price}
                                    onChange={handleChange}
                                    type="number"
                                />
                            </div>
                            <div className={'input-field'}>
                                <label htmlFor={'quantity'}>Quantity</label>
                                <input
                                    id={'quantity'}
                                    name={'quantity'}
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    type="number"
                                />
                            </div>
                            <button className="auth-btn" type="submit" disabled={loading}>
                                {loading ? <div className="loader"></div> : 'Add Product'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="products-list">
                <div>
                    <h2 className="font-bold text-lg mb-10 text-center">View Products</h2>
                    <div className=" ul-card flex flex-wrap justify-center gap-6 max-w-800px mx-auto">
                        {Array.isArray(products.products) &&
                            products.products.map((product) => (
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
                                        className="mt-6 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                                        onClick={() => handleDelete(product._id)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                    </div>

                </div>

            </div>
        </div>
    );
}