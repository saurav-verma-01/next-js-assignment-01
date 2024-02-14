import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="banner"></div>
      <h1>Home Page</h1>

      <h1>
        <Link href="/order/451">Track Order</Link>
      </h1>
    </main>
  );
};

export default page;
