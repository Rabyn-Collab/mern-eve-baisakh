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
import axios from "axios";
import { Formik } from "formik";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { editEmployee } from "../lib/action.js";
import { useRouter } from "next/navigation.js";
import { useTransition } from "react";
export default function EditForm({ user }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();



  return (
    <div className="p-5">

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Update Employee</CardTitle>
          <CardDescription>
            Enter your Employee detail
          </CardDescription>

        </CardHeader>
        <CardContent>

          <Formik
            initialValues={{
              fullname: user.fullname,
              position: user.position,
              age: user.age
            }}
            onSubmit={(values) => {
              startTransition(async () => {
                try {
                  await editEmployee({
                    id: user.id,
                    fullname: values.fullname,
                    position: values.position,
                    age: values.age
                  });
                  toast.success('Employee updated successfully');
                  router.replace('/');
                } catch (err) {
                  toast.error(err.message);
                }
              });


            }}
          >

            {({ handleChange, handleSubmit, values, }) => (
              <form action={handleSubmit}>
                <div className="flex flex-col gap-6">

                  <div className="grid gap-2">
                    <Label htmlFor="fullname">Fullname</Label>
                    <Input
                      onChange={handleChange}
                      value={values.fullname}
                      id="fullname"
                      type="text"
                      placeholder="Your name"
                      name="fullname"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="position">Position</Label>
                    <Input
                      onChange={handleChange}
                      value={values.position}
                      id="position"
                      type="text"
                      name="position"
                      placeholder="Your position"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      onChange={handleChange}
                      value={values.age}
                      id="age"
                      type="number"
                      name="age"
                      placeholder="Your age"
                      required
                    />
                  </div>


                </div>

                {isPending ? <Button className="w-full mt-6" disabled>
                  <Loader2Icon className="animate-spin" />
                  Please wait
                </Button> :

                  <Button type="submit" className="w-full mt-6">
                    Submit
                  </Button>

                }




              </form>
            )}

          </Formik>

        </CardContent>

      </Card>
    </div>
  )
}




