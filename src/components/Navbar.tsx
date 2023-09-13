import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-white text-3xl font-bold cursor-pointer">SecureUVote</h1>
        </Link>
        <ul className=" text-white font-bold flex space-x-4">
          <li>
            <Link href="/login" passHref>
              Login
            </Link>
          </li>
          <li>
            <Link href="/Register" passHref>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;






