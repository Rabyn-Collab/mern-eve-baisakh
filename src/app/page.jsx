import axios from 'axios'
import React from 'react'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link.js';
import RemoveEmployee from '../components/RemoveEmployee.jsx';
import Image from 'next/image.js';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options.js';

//export const dynamic = "force-dynamic";
//export const revalidate = 5;

export default async function Page() {
  const response = await axios.get('http://localhost:3000/api/employees');
  const data = response.data;
  const session = await getServerSession(options);
  console.log(session);


  return (
    <div className='p-5'>
      <h1>This is Next Js</h1>
      {/* 
      <Image
        loading='lazy'
        src={'https://plus.unsplash.com/premium_photo-1703389454028-f53d91316e58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'}
        height={200}
        width={300}
      /> */}
      {data.map((employee) => {
        return <Card key={employee.id} className={'mb-5'}>
          <CardHeader>
            <CardTitle>{employee.fullname}</CardTitle>
            <CardDescription>{employee.position}</CardDescription>
            <CardAction>{employee.age}</CardAction>
          </CardHeader>

          <CardFooter className={'flex gap-5'}>
            <Link href={`/form/edit/${employee.id}`}>Edit</Link>
            <Link href={`/employees/${employee.id}`}>Go to profile</Link>
            <RemoveEmployee id={employee.id} />
          </CardFooter>
        </Card>
      })}

    </div>
  )
}
