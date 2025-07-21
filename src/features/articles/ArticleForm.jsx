import { Button, Input, Textarea } from "@material-tailwind/react";
import { Formik } from "formik";
import { useAddArticleMutation } from "./articlesApi";

export default function ArticleForm() {
  const [addFunc, { isLoading }] = useAddArticleMutation();
  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          detail: '',
          image: '',
          author: ''
        }}
        onSubmit={async (val) => {
          console.log('hello');

          try {
            await addFunc(val).unwrap();
          } catch (err) {
            console.log(err);

          }

        }}

      >
        {({ handleChange, handleSubmit, values }) => (
          <form
            onSubmit={handleSubmit}
            className="max-w-[300px] space-y-5">

            <div>
              <Input
                name="title"
                onChange={handleChange}
                label="Title" />
            </div>
            <div>
              <Textarea
                name="detail"
                onChange={handleChange}
                label="Detail" />
            </div>
            <div>
              <Input
                name="image"
                onChange={handleChange}
                label="Image" />
            </div>
            <div>
              <Input
                name="author"
                onChange={handleChange}
                label="Author" />
            </div>

            <Button type="submit" loading={isLoading}>Submit</Button>
          </form>
        )}
      </Formik>

    </div>
  )
}
