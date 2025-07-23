import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { useGetAllRecipeQuery } from "./recipeApi"

export default function RecipeList() {
  const { isLoading, error, data } = useGetAllRecipeQuery();
  if (isLoading) {
    return <h1>Loading....</h1>
  }

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
          <CardFooter className="pt-3">

          </CardFooter>
        </Card>;
      })}

    </div>
  )
}
