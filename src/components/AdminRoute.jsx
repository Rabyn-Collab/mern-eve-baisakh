import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router";

export default function AdminRoute() {
  const { user } = useSelector((state) => state.userSlice);

  return user?.role === 'Admin' ? <Outlet /> : user.role === 'User' ? <Navigate to="/" /> : <Navigate to="/login" />
}
