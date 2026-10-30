import type { Metadata } from "next";
import ProductToolDetail from "../../components/home/ProductToolDetail";
import { productTools } from "../../data/productTools";

export const metadata: Metadata = {
  title: "Tools | Cubixmet",
  description: "Explore workflow tools and automation solutions from Cubixmet.",
};

export default function ToolsPage() {
  return <ProductToolDetail item={productTools[1]} />;
}
