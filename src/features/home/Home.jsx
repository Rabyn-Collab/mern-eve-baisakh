import RecipeList from "../recipe/RecipeList";
import SearchInput from "../search/SearchInput";

export default function Home() {
  return (
    <div>

      <SearchInput isNav={true} />
      <RecipeList />

    </div>
  )
}
