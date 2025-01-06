"use client";
import { productsProps } from "@/constants";
import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function ProductCard(props: productsProps) {
  const {
    id,
    title,
    price,
    image,
    isDeleteButtonVisible,
    handleDelete,
    isAddToCartButtonVisible = false,
    inCart,
  } = props;
  const cart = useContext(CartContext) || {};
  return (
    <>
      <div
        key={id}
        className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md"
      >
        <h3 className="text-lg font-semibold text-gray-800">
          <Link href={`/product/${id}`}>{title}</Link>
        </h3>
        <div className="mt-2">
          <Image src={image} alt={title} width={75} height={50} />
        </div>
        <span>Rs.{price}</span>
        <div className="flex flex-col items-center gap-2 justify-between">
          {isDeleteButtonVisible ? (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDelete?.(id)}
            >
              Delete
            </button>
          ) : null}
          {isAddToCartButtonVisible ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              // onClick={() => handleDelete?.(id)}
              onClick={() =>
                inCart ? cart?.removeFromCart(id) : cart?.addToCart(id)
              }
            >
              {inCart ? "Remove From Cart" : "Add To Cart"}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
