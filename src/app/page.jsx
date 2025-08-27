import React from 'react'
import { Button } from '../components/ui/button.jsx'
import { Avatar, AvatarImage } from '../components/ui/avatar.jsx'

export default function Page() {
  return (
    <div>

      <h1>Hello Jee</h1>
      <Button>Click Me</Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
    </div>
  )
}
