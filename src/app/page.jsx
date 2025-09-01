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

//export const dynamic = "force-dynamic";
//export const revalidate = 5;

export default async function Page() {
  const response = await axios.get('http://localhost:3000/api/employees');
  const data = response.data;


  return (
    <div className='p-5'>
      <h1>This is Next Js</h1>
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
