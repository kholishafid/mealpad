import { useNavigate, useSearchParams } from "react-router-dom";
import { MealResults } from "../types/meal";
import Image from "./image";

export const SearchResult = ({ result }: { result?: MealResults }) => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const handleRedirect = (id: string) => {
    navigate(`/recipe/${id}`);
  };

  if (result && result.meals) {
    return (
      <div className="px-4">
        <p className="text-start mb-8 text-lg">Search results for "<span className="font-semibold">{searchParams.get('key')}</span>"</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {result.meals.map((recipe) => {
            return <div
              className="rounded-6 cursor-pointer bg-stone-1 group flex flex-col"
              onClick={() => handleRedirect(recipe.idMeal)}
              key={recipe.idMeal}
            >
              <div className={"relative h-fit grid overflow-hidden"}>
                <Image thumbUrl={recipe.strMealThumb} />
              </div>

              <div className="p-4 flex items-center justify-center">
                <p className="font-sans font-medium md:text-lg text-center line-clamp-1">
                  {recipe.strMeal}
                </p>
              </div>
            </div>
          })}
        </div >
      </div>
    )
  }
  if (result && result.meals === null) {
    return 'Not found'
  }
  return 'Loading'
}
