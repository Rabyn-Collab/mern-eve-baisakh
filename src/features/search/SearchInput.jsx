import { Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useLocation, useNavigate, useSearchParams } from "react-router";

export default function SearchInput() {

  const [searchParams, setSearchParams] = useSearchParams();
  const nav = useNavigate();

  const { pathname } = useLocation();


  return (
    <div>
      <div className="w-72">
        <Formik
          initialValues={{
            search: ''
          }}
          onSubmit={(val, { resetForm }) => {
            if (pathname === '/') {
              nav(`/search-product?search=${val.search}`)
            } else {
              setSearchParams({ search: val.search })

            }


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
