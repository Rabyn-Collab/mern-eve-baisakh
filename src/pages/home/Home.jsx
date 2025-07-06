import { Avatar, Button, Typography } from '@material-tailwind/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router';
export default function Home() {
  const nav = useNavigate();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);


  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setData(response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  }



  useEffect(() => {
    getData();
  }, []);

  if (load) {
    return <div>
      <Skeleton count={3} />
      <br />
      <Skeleton count={3} />
      <br />
      <Skeleton count={3} />
      <br />
      <Skeleton count={3} />
      <br />
      <Skeleton count={3} />

    </div>
  }


  return (
    <div>


      {data && data.categories.map((cata) => {
        return <div
          onClick={() => nav(`/meal-items/${cata.strCategory}`)}
          key={cata.idCategory} className='mb-7 cursor-pointer'>
          <div className='flex items-center gap-5'>
            <Avatar src={cata.strCategoryThumb} />
            <Typography >{cata.strCategory}</Typography>

          </div>
          <p className='text-gray-600 text-sm line-clamp-3'>{cata.strCategoryDescription}</p>


        </div>
      })}






    </div>
  )
}
