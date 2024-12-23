import { Navbar } from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { productsProps } from "@/constants";

export default async function Home() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();

  return (
    <div>
      <h3 className="text-2xl text-center">
        Server side rendeering of Product Page
      </h3>
      <div className="grid grid-cols-4 gap-4 m-4">
        {products.map((product: productsProps) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
