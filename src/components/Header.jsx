import { NavLink } from "react-router";



export default function Header() {
  return (
    <div className="bg-black text-white px-5 py-2 justify-between flex items-end">

      <h1 className="text-2xl">React</h1>
      <nav className="space-x-6">

        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>

      </nav>

    </div>
  )
}
