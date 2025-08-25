import Link from "next/link.js";

export default function Header() {
  return (
    <div className="bg-black text-white px-4 py-2 flex items-baseline justify-between">

      <h1>Next Js</h1>

      <nav>
        <Link href={'/about'}>About</Link>
      </nav>

    </div>
  )
}
