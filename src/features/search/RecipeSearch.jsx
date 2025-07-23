import { useSearchParams } from "react-router"
import { useGetSearchRecipeQuery } from "../recipe/recipeApi";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

export default function RecipeSearch() {

  const [search, setSearch] = useSearchParams();
  const query = search.get('q');

  const { data, isLoading, error } = useGetSearchRecipeQuery(query);


  return (
    <div className="grid grid-cols-3 gap-5">

      {data && data.recipes.map((recipe) => {
        return <Card key={recipe.id} className="w-full  shadow-lg">
          <CardHeader floated={false} color="blue-gray">
            <img
              src={recipe.image}
              alt="ui/ux review check"
            />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />

          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray" className="font-medium">
                {recipe.name}
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >

              </Typography>
            </div>

            {recipe.ingredients.map((ing, i) => {
              return <Typography color="gray" key={i}>{ing}</Typography>
            })}


          </CardBody>

        </Card>;
      })}

    </div>
  )
}
