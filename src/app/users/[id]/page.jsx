import { redirect } from 'next/navigation.js';
import React from 'react'

export default async function Page({ params, searchParams }) {
  const { id } = await params;
  // if (id == 1) {
  //   redirect('/users');
  // }

  return (
    <div>

      <h1>Single User By Id</h1>

    </div>
  )
}
