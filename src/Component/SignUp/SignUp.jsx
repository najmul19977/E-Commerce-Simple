import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const [err,setErr] = useState('');
    const {createUser} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);
        setErr('');
        if(password !== confirm){
            setErr('You Confirm Password Did not Match');

        }
        else if(password.length<6){
            setErr('Password Must Be 6 Character')
        }
        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error);
            setErr(err.message)
        })
    }
    return (
        <div className='form-container'>
        <h2 className='login'>Sign Up</h2>
        <form onSubmit={handleSignUp}>
            <div className="form-control">
                <label>Email</label> 
                <input className='input' type="email" name='email' id='' required />
            </div>
            <div className="form-control">
                <label>Password</label> 
                <input type="password" name='password' id='' required />
            </div>
            <div className="form-control">
                <label>Confirm Password</label> 
                <input type="password" name='confirm' id='' required />
            </div>
            <input className='btn-submit' type="submit" value='Sign Up' />
        </form>
        <p>Already Have an Account? <Link to='/login'>Login</Link></p>
        <p className='text-err'>{err}</p>
    </div>
    );
};

export default SignUp;