import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './AuthProvider';

const Header = () => {
    const {user, logOut}=useContext(UserContext);
    const handleLogOut=()=>{

    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">DaisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {user && <span>{user.displayName} <button onClick={handleLogOut}>Sign Out</button></span>  }
            </div>
        </div>
    );
};

export default Header;