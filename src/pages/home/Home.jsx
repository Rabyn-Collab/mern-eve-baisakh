import BlogList from "./BlogList";


export default function Home() {
  return (
    <div>
      <div className="space-y-4 text-center my-12">
        <h1 className="text-3xl">MY BLOG</h1>
        <p>Welcome to the blog of <span className="bg-black text-white px-2">unknown</span> </p>
      </div>



      <main className="grid grid-cols-2">
        <BlogList />
        <div></div>
      </main>




    </div>
  )
}
