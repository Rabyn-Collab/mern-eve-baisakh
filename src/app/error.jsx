'use client';
import React from 'react'
import { Button } from '../components/ui/button.jsx';

export default function Error({ error, reset }) {
  return (
    <div>

      <h1>{error.message}</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}
