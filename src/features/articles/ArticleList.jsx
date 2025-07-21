import { Button, Typography } from "@material-tailwind/react";
import { useGetArticlesQuery, useLazyGetArticlesQuery } from "./articlesApi"


export default function ArticleList() {

  // const numbers = [11,22,33,44];
  // const [a,b, c] = numbers;


  const { data, isLoading, error } = useGetArticlesQuery();
  // const [getArticle, { data, isLoading, error }] = useLazyGetArticlesQuery();


  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <h1 className="text-pink-700 font-bold"> {error.data || error.message}</h1>
  }

  return (
    <div>
      {/* <Button onClick={() => getArticle()}>Call Lazy</Button> */}

      {data && data.map((article) => {
        return <div key={article.id} className="shadow-lg p-5">
          <Typography variant="h5" color="blue-gray">{article.title}</Typography>
          <p>{article.detail}</p>
          <div>
            <Typography color="blue-gray">{article.author}</Typography>
          </div>
        </div>
      })}

    </div>
  )
}
