import { productsProps } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props: productsProps) {
  const { id, title, price, image, isDeleteButtonVisible, handleDelete } =
    props;
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
        {isDeleteButtonVisible ? (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDelete?.(id)}
          >
            Delete
          </button>
        ) : null}
      </div>
    </>
  );
}
