/* import React from 'react' */
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <div className="left">
        <img src="" alt="logo" />
        <h1>Photoly</h1>
      </div>

      <div className="center">
        <button>
          <Link to={"/"}> Home </Link>
        </button>
        <button>
          <Link to={"/"}> About </Link>
        </button>
        <button>
          <Link to={"login.js"}> Login </Link>
        </button>
      </div>

      <div className="right">
        <Link to={"/"}><img src="./assets/user.png" width={50} height={50}></img></Link> 
      </div>
    </nav>
  );
};

export default Header;
