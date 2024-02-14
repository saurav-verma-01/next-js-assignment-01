import Link from "next/link";

const page = () => {
  return (
    <main>
      <div className="banner">
        <h1>Products List</h1>

        <ul className="product-list">
          <li className="product">
            <Link href="/products/mobiles">Mobile Phones</Link>
          </li>
          <li className="product">
            <Link href="/products/laptops">Laptops</Link>
          </li>
          <li className="product">
            <Link href="/products/accessories">Accessories</Link>
          </li>
          <li className="product">
            <Link href="/products/cables">Cables</Link>
          </li>
          <li className="product">
            <Link href="/products/cameras">Cameras</Link>
          </li>
          <li className="product">
            <Link href="/products/dslrs">DSLRS</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default page;
