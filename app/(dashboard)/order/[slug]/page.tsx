const page = ({ params }) => {
  return (
    <main>
      <h1>Order ID : {params.slug}</h1>
    </main>
  );
};

export default page;
