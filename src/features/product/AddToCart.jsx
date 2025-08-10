import { Button, IconButton } from "@material-tailwind/react";
import { useState } from "react"
import { useSelector } from "react-redux";

export default function AddToCart({ product }) {
  const { user } = useSelector((state) => state.userSlice);
  const [count, setCount] = useState(1);




  return (
    <div className="space-y-6">

      <div className="flex items-center gap-5">

        <IconButton
          onClick={() => setCount((prev) => prev - 1)}
          disabled={count === 1}
          size="sm">
          <i className="fas fa-minus" />
        </IconButton>

        <p>{count}</p>
        <IconButton
          disabled={count >= product.stock}
          onClick={() => setCount((prev) => prev + 1)}
          size="sm">
          <i className="fas fa-add" />
        </IconButton>


      </div>

      <Button disabled={user?.role === 'Admin'}>Add To Cart</Button>


    </div>
  )
}
