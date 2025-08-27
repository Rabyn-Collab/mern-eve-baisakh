import Link from 'next/link.js'
import React from 'react'

export default function Header() {
  return (
    <div>

      <h1>Logo</h1>
      <nav className='space-x-5'>
        <Link href={'/about'}>About</Link>
        <Link href={'/users'}>Users</Link>
      </nav>

    </div>
  )
}
