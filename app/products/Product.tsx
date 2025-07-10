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
  try {
    const res = await fetch("https://voltech-shop.vercel.app/api/products");

    if (!res.ok) {
      throw new Error("خطا در دریافت محصولات");
    }

    const products: Product[] = await res.json();

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
        <CartProduct products={products} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div className="text-red-500 p-4">خطا در بارگذاری محصولات!</div>;
  }
}

export default Products;
