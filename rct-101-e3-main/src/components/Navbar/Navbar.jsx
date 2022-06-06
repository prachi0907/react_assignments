import React from "react";

// use react-router Link or NavLink
const Link = <a />;

const Navbar = () => {
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}cart</span>
      <button data-cy="navbar-login-logout-button">login</button>
      <div>
        <link to ="/">Home</link>
        <link to ="/"login>login</link>
        <link to ="/"Products>Products</link>
        <link to ="/"cart>cart</link>
      </div>
    </div>
  );
};

export default Navbar;
