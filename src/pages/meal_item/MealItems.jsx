import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router"

export default function MealItems() {
  const { category } = useParams();
  const getData = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: category
        }
      });

      console.log(response.data);

    } catch (err) {

    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Hello jee</h1>

    </div>
  )
}
