'use client';

import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <div>

      {status == "authenticated" && <p>{session.user.name}</p>}
      <h1>This is Dashboard</h1>
    </div>
  )
}
