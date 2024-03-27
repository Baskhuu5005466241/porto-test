// components/Header.js

import Link from 'next/link';

const Header = () => {
  return (
    // <header>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link href="/">
    //           {/* Instead of <a>, just use plain text or any other element */}
    //           <span>Home</span>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/about">
    //           <span>About</span>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/portfolio">
    //           <span>Portfolio</span>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/contact">
    //           <span>Contact</span>
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
      
    // </header>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Basaa</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>About</summary>
          {/* <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul> */}
        </details>
      </li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary ">Get Started</a>
  </div>
</div>
  );
};

export default Header;
