import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { valSchema } from "./UserForm";
import { updateUser } from "./userSlice";


export default function UserUpdateForm() {
  const { id } = useParams();
  const { users } = useSelector((state) => state.userSlice);

  const user = users.find((user) => user.id === id);


  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          username: user.username,
          email: user.email,
          gender: user.gender,
          habits: user.habits,
          country: user.country,
          detail: user.detail

        }}
        onSubmit={(val) => {
          dispatch(updateUser({ ...val, id: id }))
          nav(-1);
        }}
        validationSchema={valSchema}
      >

        {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
          <form onSubmit={handleSubmit} className="max-w-[350px] space-y-5" >

            <div>
              <Input
                onChange={handleChange}
                value={values.username}
                label="Username"
                name="username" />
              {errors.username && touched.username && <h1 className="text-pink-500">{errors.username}</h1>}
            </div>
            <div>
              <Input
                onChange={handleChange}
                value={values.email}
                label="Email"
                name="email" />
              {errors.email && touched.email && <h1 className="text-pink-500">{errors.email}</h1>}
            </div>

            <div>
              <Typography>Select Your Gender</Typography>
              <div className="flex gap-5">
                <Radio
                  color="purple"
                  checked={values.gender === 'Male'}
                  onChange={handleChange}
                  label='Male'
                  value={'Male'}
                  name="gender"
                />
                <Radio
                  onChange={handleChange}
                  checked={values.gender === 'Female'}
                  color="pink"
                  label='Female'
                  value={'Female'}
                  name="gender" />
              </div>
              {errors.gender && touched.gender && <h1 className="text-pink-500">{errors.gender}</h1>}

            </div>


            <div>
              <Typography>Select Your Habits</Typography>
              <div className="flex gap-5">
                <Checkbox
                  color="purple"
                  checked={values.habits.includes('Dance')}
                  onChange={handleChange}
                  label='Dance'
                  value={'Dance'}
                  name="habits"
                />
                <Checkbox
                  onChange={handleChange}
                  checked={values.habits.includes('Sing')}
                  color="pink"
                  label='Sing'
                  value={'Sing'}
                  name="habits" />
              </div>
              {errors.habits && touched.habits && <h1 className="text-pink-500">{errors.habits}</h1>}

            </div>
            <div>
              <Typography>Select Your Country</Typography>
              <Select
                value={values.country}
                onChange={(e) => setFieldValue('country', e)}

                label="country">
                <Option value="Nepal">Nepal</Option>
                <Option value="India">India</Option>
                <Option value="China">China</Option>

              </Select>
              {errors.country && touched.country && <h1 className="text-pink-500">{errors.country}</h1>}
            </div>

            <div>
              <Textarea
                value={values.detail}
                label="Detail" onChange={handleChange} name="detail" />
              {errors.detail && touched.detail && <h1 className="text-pink-500">{errors.detail}</h1>}
            </div>

            <Button type="submit">Submit</Button>

          </form>
        )}



      </Formik>




    </div>
  )
}
