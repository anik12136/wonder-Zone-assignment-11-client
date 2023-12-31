import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import "./Header.css";
import "./carLogo.png";
const Header = () => {

  const { user, logOut } = useContext(AuthContext);
  // console.log(user)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  return (

    <div>
      {/* <div className="navbar bg-base-100 px-20 py-5 bg-pink-300"> */}
      {/* <div className="navbar bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> */}
      <div className="navbar px-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        {/* <div className="navbar bg-gradient-to-r from-pink-300 to-yellow-500 px-20"> */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-600 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/allToys">All Toys</Link></li>

              <li><Link to="/myToys">My Toys</Link></li>


              <li><Link to="/addAToys">Add a toys</Link></li>


              <li><Link to="/blogs">Blogs</Link></li>
            </ul>
            <img src="carLogo.png" alt="" />
          </div>

          {/* <div><img src="https://ibb.co/7bk97JR" alt="" /></div> */}

          <div>
            <img className='h-16' src="https://i.ibb.co/WxXPC5t/pngtree-wash-car-logo-design-png-image-8384730.png" alt="" />

          </div>
          <a className="text-white	 ms-2 normal-case text-4xl">WonderZone</a>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allToys">All Toys</Link></li>
            {user && <li><Link to="/myToys">My Toys</Link></li>}
            {user && <li><Link to="/addAToys">Add a toys</Link></li>}
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
            <Link to="/login"><button onClick={handleLogOut} className='btn bg-lime-200		text-black' >Log out</button></Link>
          }

          {
            !user &&
            <Link to="/login"><button className='btn bg-lime-200 text-black' >Log in</button></Link>
          }

        </div>
      </div>
    </div>
  );
};

export default Header;