
import './Cart.css';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = ({cart , handleClearCart,children}) => {
    console.log(handleClearCart);
    //const {cart} = props;
    console.log(cart)
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        total = total +product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity= quantity+product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total +totalShipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected items:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
          
            <button onClick={handleClearCart} className='btn-clear'>
            <span>Clear Cart</span> <FaTrashAlt></FaTrashAlt>

            </button>
            {children}

            

        </div>
    );
};

export default Cart;