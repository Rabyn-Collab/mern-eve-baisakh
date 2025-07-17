import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { addUser } from "./userSlice";
import { nanoid } from "@reduxjs/toolkit";


const valSchema = Yup.object({
  username: Yup.string().min(5).max(25).required(),
  email: Yup.string().email().required(),
  gender: Yup.string().required(),
  habits: Yup.array().min(1).required(),
  country: Yup.string().required(),
  detail: Yup.string().min(10).max(200).required()
});


export default function UserForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          email: '',
          gender: '',
          habits: [],
          country: '',
          detail: ''

        }}
        onSubmit={(val) => {
          dispatch(addUser({ ...val, id: nanoid() }))
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
                  onChange={handleChange}
                  label='Male'
                  value={'Male'}
                  name="gender"
                />
                <Radio
                  onChange={handleChange}
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
                  onChange={handleChange}
                  label='Dance'
                  value={'Dance'}
                  name="habits"
                />
                <Checkbox
                  onChange={handleChange}
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
