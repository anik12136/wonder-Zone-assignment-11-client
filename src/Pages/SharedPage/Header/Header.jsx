import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import "./Header.css";
const Header = () => {

  const { user, logOut } = useContext(AuthContext);
  // console.log(user)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            {/* <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li> */}
            <li><Link to="/allToys">All Toys</Link></li>
            <li><Link to="/myToys">My Toys</Link></li>
            <li><Link to="/addAToys">Add a toys</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">WonderZone</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          {/* <li tabIndex={0}>
              <a>
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li> */}
          <li><Link to="/allToys">All Toys</Link></li>
          <li><Link to="/myToys">My Toys</Link></li>
          <li><Link to="/addAToys">Add a toys</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user &&
          <div className="hover-container">
            <img className='rounded-full me-2' src={user.photoURL} alt="" />
            <div className="hover-text">
              <span>{user.displayName}</span>
            </div>
          </div>
        }
        {
          user &&
          <Link to="/login"><button onClick={handleLogOut} className='btn' >Log out</button></Link>
        }

        {
          !user &&
          <Link to="/login"><button className='btn' >Log in</button></Link>
        }

      </div>
    </div>
  );
};

export default Header;