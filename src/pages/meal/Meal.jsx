import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function Meal() {
  const [data, setData] = useState();

  const { id } = useParams();

  const getData = async () => {
    try {
      const reponse = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
        params: {
          i: id
        }
      });
      setData(reponse.data);
    } catch (err) {

      console.log(err);

    }
  }


  useEffect(() => {
    getData()
  }, []);




  console.log(data);

  return (
    <div>

      {data && data.meals.map((meal) => {
        console.log(Object.keys(meal));
        const youtubeId = meal.strYoutube.split('=')[1];

        return <div key={meal.idMeal} className="space-y-5">
          <Typography variant="h6">{meal.strMeal}</Typography>

          <div className="flex gap-5">
            <img className="h-[300px] w-[300px] object-cover" src={meal.strMealThumb} alt="" />

            <iframe width="420" height="300"
              allowFullScreen
              src={`https://www.youtube.com/embed/${youtubeId}`}>
            </iframe>
          </div>

          <div className="flex gap-10">

            <div>
              <Typography variant="h5" className="mb-1">Ingredients</Typography>
              {Object.keys(meal).map((str) => {

                if (str.includes('strIngredient')) {
                  return <h1 key={str}>{meal[str]}</h1>
                }


              })}

            </div>
            <div>
              <Typography variant="h5" className="mb-1">Measure</Typography>
              {Object.keys(meal).map((str) => {

                if (str.includes('strMeasure')) {
                  return <h1 key={str}>{meal[str]}</h1>
                }


              })}

            </div>
          </div>

          <Typography>{meal.strInstructions}</Typography>

        </div>
      })}

    </div>
  )
}
