import { blogs } from "../../data/data";

export default function BlogList() {
  return (
    <div className="grid gap-6">
      {blogs.map((blog) => {
        return <div key={blog.id} className="shadow-lg space-y-4">
          <img className="w-full" src={blog.image} alt="" />

          <div className="px-4 space-y-4">
            <h1>{blog.title}</h1>
            <h2>Title description, {blog.date}</h2>
            <p>{blog.desc}</p>
          </div>
          <div>

          </div>

        </div>

      })}

    </div>
  )
}
