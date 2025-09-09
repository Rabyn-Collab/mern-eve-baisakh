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
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const { data: session, status } = useSession();

  const router = useRouter();
  const [isPending, setTransition] = useTransition();
  console.log(status);

  if (status === "authenticated") {
    redirect('/')
  }

  return (
    <div className="p-5">

      <Card className="w-full max-w-sm p-5">
        <CardHeader>
          <CardTitle>Login Form</CardTitle>
          <CardDescription>
            Enter your login detail
          </CardDescription>

        </CardHeader>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(val) => {
            setTransition(async () => {

              const response = await signIn('credentials', {
                email: val.email,
                password: val.password,
                redirect: false
              });
              if (response.ok) {
                toast.success('Login successfully');
                router.back();
              } else {
                toast.error('Login failed');
              }

            });

          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">

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
        <CardContent>

        </CardContent>

      </Card>
    </div>
  )
}




