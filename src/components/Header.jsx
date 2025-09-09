import Link from 'next/link.js'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between px-5'>

      <h1>Logo</h1>
      <nav className='space-x-5'>

        <Link href={'/form/login'}>Login</Link>
        {/* <Link href={'/dashboard'}>Dashboard</Link> */}


      </nav>

    </div>
  )
}
