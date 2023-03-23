import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-24 lg:text-xl xl:text-2xl bg-teal-100 flex justify-start items-center space-x-10">
      <Link className="ml-10" to="/">
        Home
      </Link>
      <Link to="/your_blogs">Your blogs</Link>
      <Link to="/create_blog">Make a blog</Link>
    </div>
  );
}

export default Navbar;
