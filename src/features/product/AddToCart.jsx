import { Button, IconButton } from "@material-tailwind/react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setToCart } from "../carts/cartSlice.js";

export default function AddToCart({ product }) {
  const { user } = useSelector((state) => state.userSlice);
  const { carts } = useSelector((state) => state.cartSlice);
  const cart = carts.find((cart) => cart.id === product._id);
  const [count, setCount] = useState(cart?.qty ?? 1);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const addTocart = () => {
    dispatch(setToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      image: product.image,
      qty: count,
      stock: product.stock
    }));
    nav('/carts');

  }

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

      <Button
        onClick={addTocart}
        disabled={user?.role === 'Admin' || product.stock === 0}>{product.stock === 0 ? 'Out of Stock' : 'Add To Cart'}</Button>


    </div>
  )
}
