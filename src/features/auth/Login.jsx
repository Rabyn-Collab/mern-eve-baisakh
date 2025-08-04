import { Button, Input, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { useLoginUserMutation } from "./authApi.js";
import toast from "react-hot-toast";

const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required()
});

export default function Login() {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const nav = useNavigate();

  const [show, setShow] = useState(false);
  return (
    <div className="p-5 max-w-[400px]">

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}

        onSubmit={async (val) => {
          try {
            const response = await loginUser(val).unwrap();
            console.log(response);
            toast.success('Login successful');
          } catch (err) {
            console.log(err);
            toast.error(err.data.message);
          }

        }}
        validationSchema={loginSchema}

      >
        {({ handleChange, handleSubmit, touched, errors, values }) => (
          <form onSubmit={handleSubmit} className=" space-y-5">
            <div>
              <Input
                onChange={handleChange}
                value={values.email}
                label="Email" type="email" name="email" />
              {touched.email && errors.email && <p className="text-red-500">{errors.email}</p>}

            </div>
            <div>
              <div className="relative flex w-full ">
                <Input
                  type={show ? 'text' : 'password'}
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <Button
                  onClick={() => setShow((prev) => !prev)}
                  variant="text"
                  size="sm"

                  className="!absolute right-1 top-1 rounded"
                >
                  <i className={`fas ${show ? 'fa-unlock' : 'fa-lock'} fa-xl`} />
                </Button>
              </div>
              {touched.password && errors.password && <p className="text-red-500">{errors.password}</p>}


            </div>

            <Button
              loading={isLoading}
              type="submit">Submit</Button>
          </form>
        )}
      </Formik>

      <Typography color="gray" className="mt-4 text-center font-normal">
        Don't have an account ?
        <Button onClick={() => nav('/register')} variant="text" size="sm">SignUp</Button>
      </Typography>

    </div>
  )
}
