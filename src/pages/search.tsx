import { FormEvent, useRef, useState } from "react";
import "../index.css";
import Button from "../components/button";
import ImageSearch from "../assets/image/food-search.png";
import Card from "../components/card";
import EditIcon from "../assets/icon/edit-2.svg"

interface MealI {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strTags: string;
}

export default function SearchPage() {
  const [data, setData] = useState<{ meals: MealI[] }>();
  const [query, setQuery] = useState<string | undefined>("");

  const input = useRef<HTMLInputElement>(null);

  const fetchData = async (api: string) => {
    const response = await fetch(api, { mode: "cors" })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
    return setData(response);
  };

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (query !== "") {
      fetchData(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + query
      );
    }

    const target = event.target as HTMLFormElement
    target.reset()
  };

  return (
    <div>
      {!data && (
        <section className="min-h-[90vh] flex px-4">
          <div className="lg:flex w-fit mx-auto my-auto gap-4">
            <img
              className="mx-auto lg:mx-0"
              src={ImageSearch}
              alt="mealpad search"
            />
            <form
              onSubmit={handleSearch}
              className="relative flex justify-between items-center gap-4"
            >
              <input
                className="p-1 px-2 w-full sm:w-[250px] outline-none text-2xl font-sans border-b-2 border-black"
                type="text"
                placeholder="Search here"
                ref={input}
                defaultValue={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button display="inline">Search</Button>
            </form>
          </div>
        </section>
      )}

      <section className={data && 'min-h-[90vh] flex flex-col justify-center pt-16 pb-18 px-4'}>
        {data && (
          <div className="flex mx-auto w-fit mb-10">
            <span className="text-5xl">"</span>
            <h1 className="font-sans text-5xl uppercase font-semibold underline underline-gray">
              {query}
            </h1>
            <span className="text-5xl">"</span>
            <img
              src={EditIcon}
              className='h-12 cursor-pointer'
              alt=""
              onClick={() => setData(undefined)}
            />
          </div>
        )}

        {data && (
          <div className='mb-10'>
            <h1 className='font-sans text-2xl mx-auto w-fit'>
              Search for '{query}' have {data.meals?.length ?? 0} results
            </h1>
          </div>
        )}

        <div className="h-full w-full grid grid-cols-2 gap-4 md:(grid-cols-3 px-8) lg:grid-cols-4 md:gap-8">
          {data?.meals?.map((meal) => {
            return (
              <Card
                key={meal.idMeal}
                url={`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`}
              />
            );
          })}
        </div>
      </section>


    </div>
  );
}
