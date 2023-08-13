import React from 'react';
import './ReviewItem.css'
import { FaTrashAlt } from 'react-icons/fa';

const ReviewItem = ({ product,handleRemoveFromCart }) => {
    const { id, img, name, price, quantity } = product;
    return (
        <div className='review-item'>
            <img className='img' src={img} alt="" />
            <div className='review-ditels'>
                <p className='product-title'>{name}</p>
                <p>Price:<span className='orange-text'>${price}</span></p>
                <p>Quantity:<span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn' ><FaTrashAlt></FaTrashAlt></button>


        </div>
    );
};

export default ReviewItem;