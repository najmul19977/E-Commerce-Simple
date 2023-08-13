import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //console.log(storedCart);
        for (const id in storedCart) {
            //console.log(id);
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct);
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);


            }
            console.log(addedProduct);

        }
        setCart(savedCart);

    }, [products])

    const handleAddToCart = (product) => {

        //console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product =>
                        <Product key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >

                        </Product>)
                }

            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >

                    <Link className='link' to='/order'>
                        <button className='btn-review'>
                            <span >Review Order</span> <FaArrowAltCircleRight></FaArrowAltCircleRight>

                        </button>

                    </Link>




                </Cart>
            </div>

        </div>
    );
};

export default Shop;