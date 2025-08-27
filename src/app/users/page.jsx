import Link from 'next/link.js'
import React from 'react'
import { Button } from '../../components/ui/button.jsx'

export default function Page() {
  return (
    <div>
      <h1>This is User page</h1>
      <Link href={'/users/1'}><Button>Click Me</Button></Link>

    </div>
  )
}
