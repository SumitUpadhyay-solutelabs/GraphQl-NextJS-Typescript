"use client";

import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { productsProps } from "@/constants";
import { formData } from "@/constants/form";
import { CartContext } from "@/context/CartContext";

export default function ProductsContainer() {
  const [products, setProducts] = useState<Array<productsProps>>([]);
  const [loading, setLoading] = useState(true);
  const [createdProduct, setCreatedProduct] = useState<{
    productName: string;
    productPrice: number;
  }>({ productName: "", productPrice: 0 });
  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        ...createdProduct,
        id: products.length + 1,
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        title: createdProduct.productName,
        price: createdProduct.productPrice,
      },
    ]);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setCreatedProduct({ ...createdProduct, [name]: e.target.value });
  };
  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  const { cartData } = useContext<any>(CartContext);
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center"
          >
            {formData?.map((item, index) => (
              <input
                key={index}
                type={item.inputType}
                placeholder={item.placeholder}
                className={item.classes}
                name={item.name}
                onChange={(e) => handleChange(e, item.name)}
                required
              />
            ))}
          </form>
        </div>
        <div className="grid grid-cols-4 gap-4 m-4">
          {loading && <div className="text-center text-4xl">Loading...</div>}
          {products.map((product: productsProps) => (
            <ProductCard
              key={product.id}
              {...product}
              isDeleteButtonVisible={true}
              isAddToCartButtonVisible={true}
              handleDelete={handleDelete}
              inCart={cartData.includes(product.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
