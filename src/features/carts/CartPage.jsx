import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../app/apiUrl.js";
import { Button, IconButton } from "@material-tailwind/react";
import { clearCart, removeFromCart, setToCart } from "./cartSlice.js";
import { useCreateOrderMutation } from "../orders/orderApi.js";
import toast from "react-hot-toast";

export default function CartPage() {
  const { user } = useSelector((state) => state.userSlice);
  const { carts } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const total = carts.reduce((a, b) => a + b.qty * b.price, 0);
  const [placeOrder, { isLoading }] = useCreateOrderMutation();


  const handleOrder = async () => {
    try {
      await placeOrder({
        token: user.token,
        data: {
          totalAmount: total,
          products: carts
        }
      }).unwrap();
      dispatch(clearCart());
      toast.success('Order placed successfully');
    } catch (err) {
      console.log(err)
      toast.error(err.data?.message);
    }
  }

  return (
    <div>

      {carts.length === 0 ? <h1 className="text-2xl font-bold">Cart is empty</h1> : <div>
        {carts.map((cart, index) => {
          return <div key={cart.id} className="grid grid-cols-3 mb-4 gap-7">

            <div className="flex  gap-5">
              <img className="h-[100px]" src={`${baseUrl}/${cart.image}`} alt="" />
              <h1 className="mt-3">{cart.title}</h1>
            </div>

            <div>
              <h1>Price: Rs.{cart.price}</h1>
              <div className="flex gap-5 items-center mt-3">
                <IconButton
                  onClick={() => dispatch(setToCart({ ...cart, qty: cart.qty - 1 }))}
                  disabled={cart.qty === 1}
                  size="sm">
                  <i className="fas fa-minus" />
                </IconButton>
                <h1>X {cart.qty}</h1>
                <IconButton
                  onClick={() => dispatch(setToCart({ ...cart, qty: cart.qty + 1 }))}
                  disabled={cart.qty >= cart.stock}
                  size="sm">
                  <i className="fas fa-add" />
                </IconButton>
              </div>


            </div>

            <IconButton
              onClick={() => dispatch(removeFromCart(index))}
              color="blue-gray"
              size="sm">
              <i className="fas fa-trash" />
            </IconButton>

          </div>
        })}
        <h1>Total:- Rs. {total}</h1>

        <Button
          onClick={handleOrder}
          loading={isLoading} className="mt-7">Place an Order</Button>

      </div>}




    </div>
  )
}
