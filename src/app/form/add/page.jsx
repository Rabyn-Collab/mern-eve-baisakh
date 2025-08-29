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
import { addEmployee } from "../../../lib/action.js"
import { useActionState } from "react";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
export default function Page() {

  const handleForm = async (prevData, formData) => {
    try {
      const res = await addEmployee(formData);
      toast.success(res.message);
    } catch (err) {

      toast.error(err.message);

    }
  }

  const [state, action, isPending] = useActionState(handleForm, null);




  return (
    <div className="p-5">

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Add Employee</CardTitle>
          <CardDescription>
            Enter your Employee detail
          </CardDescription>

        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="flex flex-col gap-6">

              <div className="grid gap-2">
                <Label htmlFor="fullname">Fullname</Label>
                <Input
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
            </Button> : <Button type="submit" className="w-full mt-6">
              Submit
            </Button>}




          </form>
        </CardContent>

      </Card>
    </div>
  )
}




