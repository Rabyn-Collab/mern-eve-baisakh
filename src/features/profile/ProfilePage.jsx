import { useSelector } from "react-redux"
import OrderPage from "../orders/OrderPage.jsx";

export default function ProfilePage() {
  const { user } = useSelector((state) => state.userSlice);


  return (
    <div className="grid grid-cols-2">

      <OrderPage user={user} />

    </div>
  )
}
