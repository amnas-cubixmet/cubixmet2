import type { Metadata } from "next";
import ProductToolDetail from "../../components/home/ProductToolDetail";
import { productTools } from "../../data/productTools";

export const metadata: Metadata = {
  title: "Products | Cubixmet",
  description: "Explore software product development at Cubixmet.",
};

export default function ProductsPage() {
  return <ProductToolDetail item={productTools[0]} />;
}
