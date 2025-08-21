import { useParams } from "react-router"
import { useGetProductQuery, useReviewAddMutation } from "./productApi.js";
import { baseUrl } from "../../app/apiUrl.js";
import { Button, Option, Rating, Select, Textarea } from "@material-tailwind/react";
import AddToCart from "./AddToCart.jsx";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from 'yup';
import { toast } from "react-hot-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const { isLoading, error, data } = useGetProductQuery(id);
  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1>{error.data}</h1>
  console.log(data);

  return (
    <div>
      <div className="p-5 grid grid-cols-[1.3fr_2fr] gap-16">

        <div>
          <img src={`${baseUrl}/${data.image}`} alt="" />
        </div>

        <div className="space-y-3 ">
          <h1 className="font-semibold text-xl">{data.title}</h1>
          <p className="text-gray-700">Rs.{data.price}</p>
          <p className="text-gray-700">Brand: {data.brand}</p>
          <Rating readonly value={Math.round(data.rating)} />

          <div className="mt-11">
            <AddToCart product={data} />
          </div>
        </div>


      </div>
      <ReviewAdd id={id} reviews={data.reviews} />

    </div>
  )
}

const valSchema = Yup.object({
  rating: Yup.number().required(),
  comment: Yup.string().min(10).required(),
});

function ReviewAdd({ id, reviews }) {
  const { user } = useSelector((state) => state.userSlice);
  const [addReview, { isLoading }] = useReviewAddMutation();
  return (
    <div>
      {user && user.role === 'User' && <div>
        <h1 className="mb-2">Add Review</h1>
        <Formik
          initialValues={{
            rating: '',
            comment: ''
          }}
          onSubmit={async (val, { resetForm }) => {
            try {
              await addReview({
                token: user.token,
                id: id,
                data: val
              }).unwrap();
              toast.success('Review added successfully');
              resetForm();
            } catch (err) {
              toast.error(err.data || err.data.message);

            }

          }}
          validationSchema={valSchema}
        >
          {({ handleChange, handleSubmit, values, touched, errors, setFieldValue }) => (
            <form onSubmit={handleSubmit} className="max-w-[400px] space-y-4">
              <div>
                <Select
                  value={values.rating}
                  name="rating"
                  onChange={(e) => setFieldValue('rating', e)}
                  label="Rate Product">
                  <Option value="1">Worst</Option>
                  <Option value="2">bad</Option>
                  <Option value="3">Good</Option>
                  <Option value="4">Very Good</Option>
                  <Option value="5">Excellent</Option>
                </Select>
                {errors.rating && touched.rating && <p className="text-red-500">{errors.rating}</p>}
              </div>

              <div>
                <Textarea
                  name="comment"
                  onChange={handleChange}
                  value={values.comment}
                  label="Comment" />
                {errors.comment && touched.comment && <p className="text-red-500">{errors.comment}</p>}
              </div>
              <Button loading={isLoading} type="submit">Submit</Button>
            </form>
          )}


        </Formik>

      </div>}


      {reviews && reviews.length > 0 && <div className="mt-10">
        <h1 className="mb-2">Reviews</h1>
        <div className="space-y-3">
          {reviews.map((item) => (
            <div className="space-y-2" key={item._id}>
              <h1>{item.userId.username}</h1>
              <Rating readonly value={item.rating} />
              <p>{item.comment}</p>
            </div>
          ))

          }

        </div>
      </div>}









    </div>
  )
}
