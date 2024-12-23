import Link from "next/link";

export const Navbar = () => {
  const navData = [
    { title: "Client Side Rendering", href: "/client" },
    { title: "Product Details", href: "/product/5" },
    { title: "GraphQL", href: "/graphql" },
    { title: "GraphQL Server Side", href: "/graphql/1" },
  ];
  return (
    <nav className="sticky top-0 bg-gray-800 text-white p-4 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Shoping</h1>
        <ul className="flex space-x-4">
          {navData.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="hover:text-gray-400">
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
