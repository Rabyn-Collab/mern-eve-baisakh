import Link from "next/link.js";

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link href={'/'}>Go to Home</Link>

    </div>
  )
}
