import { GetServerSideProps } from "next";
import Image from "next/image";
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const productId = (await params).id;
  const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const products = await data.json();
  //   const d = await fetch("http://localhost:4000/api/graphql", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       query: `
  //       query getUser {
  //     getUsers {
  //       age
  //     }
  // }
  //       `,
  //     }),
  //   });
  //   const res = await d.json();
  //   console.log(res);
  return (
    <>
      <div className="container mx-auto px-4 mt-4 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={products.image}
              alt={products.title}
              className="w-48 h-48 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              {products.title}
            </h3>
            <p className="text-xl font-medium mb-4 text-gray-600">
              ${products.price}
            </p>
            <p className="text-lg font-normal text-gray-700">
              {products.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
