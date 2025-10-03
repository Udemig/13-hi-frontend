import Link from "next/link";

export const metadata = {
  title: "Ürünler",
  description: "Ürünler sayfası",
};

const Products = () => {
  return (
    <div>
      <h1>Ürünler</h1>

      <div className="flex flex-col gap-10 mt-10">
        <Link href="/products/1">Ürün 1</Link>
        <Link href="/products/2">Ürün 2</Link>
        <Link href="/products/3">Ürün 3</Link>
        <Link href="/products/4">Ürün 4</Link>
        <Link href="/products/5">Ürün 5</Link>
      </div>
    </div>
  );
};

export default Products;
