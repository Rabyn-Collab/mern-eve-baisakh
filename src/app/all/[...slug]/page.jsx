import React from 'react'

export default async function Page({ params }) {
  console.log(await params)
  return (
    <div>
      <h1>hello jee</h1>

    </div>
  )
}
