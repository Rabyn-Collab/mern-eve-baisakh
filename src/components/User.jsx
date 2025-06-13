import React from 'react'

export default function User({ user }) {

  return (
    <div>

      <h1>{user.name}</h1>
      <img src={user.image} alt="" />
      <p>{user.post}</p>

    </div>
  )
}
