import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-24 lg:text-xl xl:text-2xl bg-gray-800 text-white flex items-center space-x-10 justify-center">
      <Link className="ml-10" to="/">
        Home
      </Link>
      <Link to="/create_blog">Make a blog</Link>
    </div>
  );
}

export default Navbar;
