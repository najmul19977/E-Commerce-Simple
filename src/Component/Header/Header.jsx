import React, { useContext } from 'react';
import './Header.css';
import logo from '../../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.log(error))
    }
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='header-links'>
               
                <Link className='link' to="/">Shop</Link>
                <Link className='link' to='/order'>Order</Link>
                
                <Link className='link' to='/login'>Login</Link>
                <Link className='link' to='/signup'>SignUp</Link>
                {
                    user && <span>Welcome {user.email} <button onClick={handleLogout}>LogOut</button></span>

                }
            </div>
        </div>
    );
};

export default Header;
