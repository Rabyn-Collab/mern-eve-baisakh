import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-black text-white px-5 py-3 flex items-baseline justify-between">
      <h1 className="text-2xl">Logo</h1>

      <nav>
        <NavLink to={'/user-form'}>UserForm</NavLink>
      </nav>

    </div>
  )
}
