import { getServerSession } from 'next-auth'
import Link from 'next/link.js'
import React from 'react'

import SignOutButton from './SignOutButton';

export default async function Header() {
  const session = await getServerSession();
  return (
    <div className='flex justify-between px-5 py-3'>

      <h1>Logo</h1>
      <nav className='space-x-5'>

        {session?.user ? <div className='flex gap-5'>
          <p>{session.user?.email}</p>
          <SignOutButton />


        </div> :

          <Link href={'/form/login'}>Login</Link>}
        {/* <Link href={'/dashboard'}>Dashboard</Link> */}


      </nav>

    </div>
  )
}
