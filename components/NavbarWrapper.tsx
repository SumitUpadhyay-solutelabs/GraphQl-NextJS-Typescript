"use client";
import CartContextProvider from "@/context/CartContext";
import { Navbar } from "./Navbar";

export default function NavbarWrapper() {
  return (
    <>
      <CartContextProvider>
        <Navbar />
      </CartContextProvider>
    </>
  );
}
