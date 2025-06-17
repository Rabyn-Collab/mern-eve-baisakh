import { blogs } from "../../data/data";

export default function BlogList() {
  return (
    <div className=" bg-amber-700">
      {blogs.map((blog) => {
        return <div key={blog.id}>
          <img src={blog.image} alt="" />

        </div>
      })}

    </div>
  )
}
