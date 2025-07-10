import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { useApi } from "../../hooks/useApi";

export default function MealItems() {
  const nav = useNavigate();

  const { category } = useParams();

  const [data, load, err] = useApi('https://www.themealdb.com/api/json/v1/1/filter.php', { c: category });
  if (load) return <h1>Loading....</h1>
  if (err) return <h1>{err}</h1>


  return (
    <div className="grid grid-cols-4 gap-5">
      {data && data.meals.map((meal) => {
        return <div
          onClick={() => nav(`/meal/${meal.idMeal}`)}
          key={meal.idMeal} className="shadow-2xl cursor-pointer">
          <img className="rounded-tr-lg rounded-tl-lg" src={meal.strMealThumb} alt="" />
          <h1 className="text-center p-2">{meal.strMeal}</h1>

        </div>

      })}

    </div>
  )
}
