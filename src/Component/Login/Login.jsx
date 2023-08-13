import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [show,setShow] = useState(false);


    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.form?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset('');
            navigate(from,{replace:true});
        })
        .catch(error=>{
            console.log(error.massage);
        })

    }
  
    return (
        <div className='form-container'>
            <h2 className='login'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label>Email</label> 
                    <input type="email" name='email' id='' required />
                </div>
                <div className="form-control">
                    <label>Password</label> 
                    <input type={show ? 'Text' :'password'} name='password' id='' required />
                    <p onClick={() =>setShow(!show)}><small>
                        {
                            show? <span>Hide Password</span>:<span>Show Password</span>
                        }
                        </small></p>
                </div>
                <input className='btn-submit' type="submit" value='Login' />
            </form>
            <p>New To E-Commerce?<Link to='/signup'>Create New Account</Link></p>
        </div>
    );
};

export default Login;