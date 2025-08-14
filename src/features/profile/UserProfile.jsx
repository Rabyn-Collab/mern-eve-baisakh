import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useUpdateUserMutation } from "../auth/authApi.js";
import { useDispatch } from "react-redux";
import { addUser } from "../user/userSlice.js";
import toast from "react-hot-toast";

const valSchema = Yup.object({
  username: Yup.string().min(5).required(),
  email: Yup.string().email().required(),
})

export default function UserProfile({ user }) {
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          username: user.username,
          email: user.email
        }}

        onSubmit={async (val) => {
          try {
            await updateUser({
              token: user.token,
              data: val
            }).unwrap();
            dispatch(addUser({ ...user, username: val.username, email: val.email }));
            toast.success('Profile updated successfully');
          } catch (err) {
            toast.error(err.data.message);

          }

        }}
        validationSchema={valSchema}

      >


        {({ handleChange, handleSubmit, touched, errors, values }) => (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input
                value={values.username}
                onChange={handleChange}
                name="username"
                label="Username" />
              {touched.username && errors.username && <p className="text-red-500">{errors.username}</p>}
            </div>

            <div>
              <Input
                value={values.email}
                type="email"
                onChange={handleChange}
                name="email"
                label="Email" />
              {touched.email && errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <Button type="submit" loading={isLoading}>Update</Button>
          </form>
        )}

      </Formik>

    </div>
  )
}
