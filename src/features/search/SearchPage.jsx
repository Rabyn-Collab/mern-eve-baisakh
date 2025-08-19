import { useSearchParams } from "react-router"
import { useGetProductsQuery } from "../product/productApi.js";
import ProductCard from "../product/ProductCard.jsx";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, error } = useGetProductsQuery({
    search: searchParams.get('search')
  });

  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1>{error.data}</h1>


  return (
    <div className="grid grid-cols-4 gap-5">

      {data && data.products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}



    </div>
  )
}
