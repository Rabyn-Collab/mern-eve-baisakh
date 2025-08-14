import { useParams } from "react-router"
import { useGetOrderDetailQuery } from "./orderApi.js";
import { baseUrl } from "../../app/apiUrl.js";

export default function OrderDetail() {
  const { id } = useParams();
  const { isLoading, error, data } = useGetOrderDetailQuery(id);
  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1>{error.data}</h1>
  return (
    <div>

      {data && <div>
        <h1 className="font-semibold text-xl">{data._id}</h1>
        <p className="text-gray-700">Rs.{data.totalAmount}</p>
        {data.products.map((product) => {
          return <div className="space-y-3 mt-5 " key={product._id}>
            <div className="flex gap-5">
              <div>
                <img className="w-40" src={`${baseUrl}/${product.image}`} alt="" />
              </div>
              <div>
                <h1 className="font-semibold text-xl">{product.title}</h1>
                <p className="text-gray-700">Rs.{product.price}</p>
                <p className="text-gray-700">Qty: {product.qty}</p>
              </div>

            </div>

            <hr />
          </div>
        })}

      </div>}

    </div>
  )
}
