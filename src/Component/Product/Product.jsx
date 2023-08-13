import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, ratings, quantity, price } = props.product;

   const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Rating:{ratings}stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add To Cart <FaShoppingCart></FaShoppingCart></button>
        </div>
    );
};

export default Product;