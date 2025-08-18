import { Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useNavigate } from "react-router";

export default function SearchInput() {
  const nav = useNavigate();
  return (
    <div>
      <div className="w-72">
        <Formik
          initialValues={{
            search: ''
          }}
          onSubmit={(val, { resetForm }) => {
            nav(`/search-product?search=${val.search}`)

          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <form
              onSubmit={handleSubmit}
            >
              <div>
                <Input
                  name="search"
                  value={values.search}
                  onChange={handleChange}
                  label="Search In Shop" icon={<i className="fas fa-search" />} />
              </div>
            </form>
          )}
        </Formik>

      </div>
    </div>
  )
}
