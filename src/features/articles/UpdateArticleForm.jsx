import { Button, Input, Textarea } from "@material-tailwind/react";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { valSchema } from "./ArticleForm";
import { useGetArticleQuery, useUpdateArticleMutation } from "./articlesApi";



export default function UpdateArticleForm() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetArticleQuery(id);
  const [updateArticle, { isLoading: isLoad }] = useUpdateArticleMutation();

  const nav = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <h1 className="text-pink-700 font-bold"> {error.data || error.message}</h1>
  }

  return (
    <div>
      <Formik
        initialValues={{
          title: data.title,
          detail: data.detail,
          image: data.image,
          author: data.author
        }}
        onSubmit={async (val) => {

          try {
            await updateArticle({
              id: id,
              data: val
            }).unwrap();
            toast.success('updated successfully');
            nav(-1);
          } catch (err) {
            console.log(err);
            toast.error(err?.error);
          }

        }}

        validationSchema={valSchema}

      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <form
            onSubmit={handleSubmit}
            className="max-w-[300px] space-y-5">

            <div>
              <Input
                name="title"
                value={values.title}
                onChange={handleChange}
                label="Title" />
              {touched.title && errors.title && <p className="text-red-500">{errors.title}</p>}
            </div>
            <div>
              <Textarea
                name="detail"
                value={values.detail}
                onChange={handleChange}
                label="Detail" />
              {touched.detail && errors.detail && <p className="text-red-500">{errors.detail}</p>}
            </div>
            <div>
              <Input
                name="image"
                value={values.image}
                onChange={handleChange}
                label="Image" />
              {touched.image && errors.image && <p className="text-red-500">{errors.image}</p>}
            </div>
            <div>
              <Input
                name="author"
                value={values.author}
                onChange={handleChange}
                label="Author" />
              {touched.author && errors.author && <p className="text-red-500">{errors.author}</p>}
            </div>

            <Button loading={isLoad} type="submit" >Submit</Button>
          </form>
        )}
      </Formik>

    </div>
  )
}
