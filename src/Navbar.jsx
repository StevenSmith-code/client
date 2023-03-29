import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-24 lg:text-xl xl:text-2xl bg-gray-800 text-white flex items-center space-x-10 justify-center">
      <Link
        className="ml-10 hover:text-zinc-400 hover:scale-110 transition duration-150 ease-in-out active:text-zinc-600"
        to="/"
      >
        Home
      </Link>
      <Link
        className="hover:text-zinc-400 hover:scale-110 transition duration-150 ease-in-out active:text-zinc-600"
        to="/create_blog"
      >
        Make a blog
      </Link>
    </div>
  );
}

export default Navbar;
