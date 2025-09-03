'use client'
// import { useSession } from "next-auth/react"
// import { redirect } from "next/dist/server/api-utils";

export default function PostsPage(){
    // const {data: session, status} = useSession({
    //     required:true,
    //     onUnauthenticated(){
    //         redirect('/api/signin')
    //     }
    // });

    return(
        <>
            <p>Welcome to posts</p>
        </>
    )
}