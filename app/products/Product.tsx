import CartProduct from "@/components/product/CartProduct";

export interface Product {
  id: number;
  title: string;
  slug: string;
  des: string;
  price: number;
  totalprice: number;
  by: number;
  img: string;
  count: number;
}

async function Products() {
  const res = await fetch("http://localhost:3000/api/products");
  const products: Product[] = await res.json();
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 my-5">
        <CartProduct products={products} />
      </div>
    </>
  );
}

export default Products;