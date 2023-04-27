import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './AuthProvider';

const Register = () => {
    const [error, setError]=useState('');
    const {createUser}=useContext(UserContext);

    const handleRegister=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const name=form.name.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        console.log(name, email, password, confirm)

        setError('');
       if(password!==confirm){
            setError('Your passWord is not match')
            return
       }
       else if(password.length<6){
        setError('password must be 6 cheracters')
        return
       }

       createUser(email, password)
       .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser)
        form.reset();
       })
       .catch(error=>{
        console.log(error);
        setError(error.message);
       })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-2xl font-bold">Please Register Now !!</h1>
                        </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm</span>
                                </label>
                                <input type="password" name='confirm' placeholder="Your Password" className="input input-bordered" required />
                                <Link to="/login" className="label">
                                    <a href="#" className="label-text-alt link ">Forgot password?</a>
                                </Link>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <Link to="/login" className="label ml-8 mb-4">
                            <a href="#" className="label-text-alt link ">Already have an account? Please login</a>
                        </Link>
                        <p className='text-red-400 pl-8 pb-4'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;