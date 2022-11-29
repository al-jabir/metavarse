import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between px-5 py-2">
      <nav>Logo</nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
