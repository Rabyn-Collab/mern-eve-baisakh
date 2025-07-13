import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";


export default function Home() {

  const [data, setData] = useState();
  const [searchParams, setSeachParams] = useSearchParams();

  const getData = async () => {
    const order = searchParams.get('filter')
    try {
      const response = await axios.get(`https://dummyjson.com/products?sortBy=title&order=${order === null ? '' : order}`);
      setData(response.data);
    } catch (err) {

    }
  }

  const setParams = () => {
    setSeachParams({ filter: 'desc' })
  }

  useEffect(() => {
    getData();
  }, [searchParams]);

  //console.log(searchParams.get('filter'));
  return (
    <div>

      <Button onClick={setParams}>Click TO Post</Button>

      {data && data.products.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.price}</p>
          </div>
        )
      })}

    </div>
  )
}
