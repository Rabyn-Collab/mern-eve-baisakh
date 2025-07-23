import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useNavigate } from "react-router";

export default function SearchInput() {

  const nav = useNavigate();
  return (
    <div>

      <Formik
        initialValues={{
          search: ''
        }}
        onSubmit={(val, { resetForm }) => {
          nav(`/recipes/search?q=${val.search}`)
          resetForm();
        }}

      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <form onSubmit={handleSubmit} className="flex gap-10" >
            <div className="w-[350px]">
              <Input
                label="Search Food Recipe"
                onChange={handleChange}
                value={values.search}
                name="search"
                icon={<i className="fas fa-search" />}
              />
            </div>
            <Button type="submit">Submit</Button>


          </form>
        )}

      </Formik>

    </div>
  )
}
