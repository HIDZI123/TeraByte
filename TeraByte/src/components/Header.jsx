/* import React from 'react' */
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      
      <div className="left">
        <img src="" alt="logo" />
        <h1>Photoly</h1>
      </div>

      <div className="right">
        <Link to={"/"}> Home </Link>
        <Link to={"/"}> About </Link>
        <Link to={"/login"}> Login </Link>
      </div>
    </nav>
  );
};

export default Header;
