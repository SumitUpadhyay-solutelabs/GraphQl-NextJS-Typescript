import ProductsContainer from "@/components/ProductsContainer";

export default function Client() {
  return (
    <div>
      <h3 className="text-2xl text-center">
        Client side rendeering of products page
      </h3>
      <div className="mt-4">
        <ProductsContainer />
      </div>
    </div>
  );
}