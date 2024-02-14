import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <Link href="/">SHOPIFY</Link>
      </h1>

      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/checkout">Checkout</Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>

          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
