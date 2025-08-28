'use client';

import React, { useState } from 'react'
import { Button } from './ui/button.jsx';

export default function Counter({ func }) {
  const [count, setCount] = useState(0);
  return (
    <div>


      <Button onClick={() => setCount(count + 1)}>Click</Button>
      <Button onClick={func}>Click TO</Button>

    </div>
  )
}
