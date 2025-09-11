'use client';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Formik } from "formik";
import { Loader2Icon } from "lucide-react";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { registerUser } from "../../../lib/action";

export default function Page() {

  const router = useRouter();
  const [isPending, setTransition] = useTransition();



  return (
    <div className="p-5">

      <Card className="w-full max-w-sm p-5">
        <CardHeader>
          <CardTitle>Register Form</CardTitle>
          <CardDescription>
            Enter your register detail
          </CardDescription>

        </CardHeader>

        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
          }}
          onSubmit={(val) => {

            setTransition(async () => {
              try {
                await registerUser(val);
                toast.success('User created successfully');
                router.back();

              } catch (err) {
                toast.error(err.message);

              }
            })


          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">

                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    onChange={handleChange}
                    values={values.username}
                    id="username"
                    type="text"
                    placeholder="Your Username"
                    name="username"

                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onChange={handleChange}
                    values={values.email}
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    name="email"

                  />
                </div>


                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    onChange={handleChange}
                    values={values.password}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                  />
                </div>


              </div>

              {isPending ? <Button className="w-full mt-6" disabled>
                <Loader2Icon className="animate-spin" />
                Please wait
              </Button> : <Button type="submit" className="w-full mt-6">
                Submit
              </Button>}




            </form>
          )}
        </Formik>
        <CardContent className={'flex gap-3'}>
          <p>Already have an Account ?</p>
          <p className="cursor-pointer" onClick={() => router.back()}>Login</p>

        </CardContent>

      </Card>
    </div>
  )
}




