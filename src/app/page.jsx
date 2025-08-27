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

export default async function Page() {
  const response = await axios.get('https://60f3af443cb0870017a8a007.mockapi.io/employees');
  const data = response.data;
  console.log(data);

  return (
    <div className='p-5'>
      {data.map((employee) => {
        return <Card key={employee.id} className={'mb-5'}>
          <CardHeader>
            <CardTitle>{employee.fullname}</CardTitle>
            <CardDescription>{employee.position}</CardDescription>
            <CardAction>{employee.age}</CardAction>
          </CardHeader>

          <CardFooter>
            <Link href={`/employees/${employee.id}`}>Go to profile</Link>
          </CardFooter>
        </Card>
      })}

    </div>
  )
}
