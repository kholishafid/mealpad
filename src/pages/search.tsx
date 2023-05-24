import { useEffect, useRef, useState } from "react"
import '../index.css'
import Button from "../components/button"
import ImageSearch from '../assets/image/food-search.png'
import Card from "../components/card/card"

interface MealI {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strTags: string;
}

export default function Search() {
  const [data, setData] = useState<{ meals: MealI[] }>();
  const [query, setQuery] = useState<string | undefined>('')

  const input = useRef<HTMLInputElement>(null)

  const fetchData = async (api: string) => {
    const response = await fetch(api, { mode: "cors" })
      .then((res) => {
        return res.json()
      })
      .catch((err) => {
        console.log(err)
      })
    return setData(response)
  }

  const handleSearch = async () => {
    setQuery(input.current?.value)
  }

  useEffect(() => {
    if (query !== '') {
      fetchData('https://www.themealdb.com/api/json/v1/1/search.php?s=' + query)
    }
  }, [query])

  return (
    <div className='h-fit my-auto'>
      {!query &&
        <div className="lg:(flex w-fit mx-auto) gap-4">
          <img
            className='mx-auto lg:mx-0'
            src={ImageSearch}
            alt="mealpad search"
          />
          <div className="relative flex justify-center items-center gap-4">
            <input
              className='p-1 px-2 w-[150px] sm:w-[250px] outline-none text-2xl font-sans border-b-2 border-black'
              type="text"
              placeholder="Search here"
              ref={input}
            />
            <span onClick={handleSearch}>
              <Button
                display='inline'
              >
                Search
              </Button>
            </span>
          </div>
        </div>
      }

      {query &&
        <div className='flex mx-auto w-fit my-10'>
          <span className='text-5xl'>"</span>
          <h1 className='font-sans text-5xl uppercase font-semibold underline underline-gray'>{query}</h1>
          <span className='text-5xl'>"</span>
        </div>
      }

      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8 px-6'>
        {data &&
          data.meals.map((meal) => {
            return (
              <Card key={meal.idMeal} url={`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`} />
            )
          })
        }
      </div>
    </div>
  )
}