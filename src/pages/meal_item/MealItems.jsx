import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"

export default function MealItems() {
  const nav = useNavigate();
  const [data, setData] = useState();
  const { category } = useParams();
  const getData = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: category
        }
      });
      setData(response.data);
    } catch (err) {

    }
  }

  useEffect(() => {
    getData();
  }, []);

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
