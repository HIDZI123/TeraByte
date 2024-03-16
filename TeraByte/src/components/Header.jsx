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
          <Link to={"/login"}> Login </Link>
        </button>
      </div>

      <div className="right">
        <h1>Pofile</h1>
      </div>
    </nav>
  );
};

export default Header;
