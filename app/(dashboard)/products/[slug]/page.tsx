import Link from "next/link";

const page = ({ params }) => {
  return (
    <main>
      <div className="banner">
        <h1>Product :</h1>
        <h2 className="product-name">{params.slug}</h2>

        <div className="back-link">
          <Link href="/products">Back to Products </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
