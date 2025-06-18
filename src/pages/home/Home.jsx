import BlogList from "./BlogList";
import Side from "./Side";


export default function Home() {
  return (
    <div className="bg-yells">
      <div className="space-y-4 text-center my-12">
        <h1 className="text-3xl">MY BLOG</h1>
        <p>Welcome to the blog of <span className="bg-black text-white px-2">unknown</span> </p>
      </div>



      <main className="grid grid-cols-[1.7fr_1fr] px-5 gap-7 max-md:grid-cols-1 ">
        <BlogList />
        <Side />
      </main>




    </div>
  )
}
