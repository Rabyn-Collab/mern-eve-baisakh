// import { getServerSession } from 'next-auth'
// import React from 'react'
// import { options } from '../api/auth/[...nextauth]/options';
'use client';

import { useSession } from "next-auth/react";

export default function Page() {
  // const session = await getServerSession(options);
  // console.log(session);

  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <div>

      <h1>Posts page</h1>

    </div>
  )
}
