import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router";

export default function UserRoute() {
  const { user } = useSelector((state) => state.userSlice);

  return user ? <Outlet /> : <Navigate to="/login" />
}
