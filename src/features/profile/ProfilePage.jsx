import { useSelector } from "react-redux"
import OrderPage from "../orders/OrderPage.jsx";
import UserProfile from "./UserProfile.jsx";

export default function ProfilePage() {
  const { user } = useSelector((state) => state.userSlice);


  return (
    <div className="grid grid-cols-[1fr_1.5fr] gap-5">
      <UserProfile user={user} />

      <OrderPage user={user} />

    </div>
  )
}
