import { Button, Input, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { useRegisterUserMutation } from "./authApi.js";
import toast from "react-hot-toast";
const registerSchema = Yup.object({
  username: Yup.string().min(5).required(),
  email: Yup.string().email().required(),
  password: Yup.string().required()
});

export default function Register() {
  const nav = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation()

  const [show, setShow] = useState(false);
  return (
    <div className="p-5 max-w-[400px]">

      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}

        onSubmit={async (val) => {
          try {
            await registerUser(val).unwrap();

            toast.success('Registration successful');
            nav(-1);
          } catch (err) {

            toast.error(err.data.message);
          }
        }}
        validationSchema={registerSchema}

      >
        {({ handleChange, handleSubmit, touched, errors, values }) => (
          <form onSubmit={handleSubmit} className=" space-y-5">
            <div>
              <Input
                onChange={handleChange}
                value={values.username}
                label="Username" name="username" />
              {touched.username && errors.username && <p className="text-red-500">{errors.username}</p>}

            </div>

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
                  name="password"
                  type={show ? 'text' : 'password'}
                  label="Password"
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

            <Button loading={isLoading} type="submit">Submit</Button>
          </form>
        )}
      </Formik>

      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account ?
        <Button onClick={() => nav(-1)} variant="text" size="sm">Login </Button>
      </Typography>

    </div>
  )
}
