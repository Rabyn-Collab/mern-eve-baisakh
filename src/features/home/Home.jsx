import ProductList from "../product/ProductList.jsx";
import { TopProducts } from "./TopProducts.jsx";


export default function Home() {
  return (
    <div className="p-5 space-y-4">

      <TopProducts />

      <ProductList />

    </div>
  )
}
