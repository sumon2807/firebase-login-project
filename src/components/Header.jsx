import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(UserContext);

    const handleLogout=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between">
                <div>
                    <a className="btn btn-ghost normal-case text-xl">DaisyUI</a>
                    <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                    {
                     user && <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
                    }
                    <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                </div>
                <div className='pr-8'>
                    {
                        user ? <>
                        <span className='mr-2'>{user.email}</span>
                        <button onClick={handleLogout} className="btn btn-xs">Logout</button>
                        </>:<Link to="/login">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;