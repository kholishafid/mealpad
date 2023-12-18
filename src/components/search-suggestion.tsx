import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const areaNames = [
  "American", "British", "Canadian", "Chinese", "Croatian", "Dutch", "Egyptian",
  "Filipino", "French", "Greek", "Indian", "Irish", "Italian", "Jamaican",
  "Japanese", "Kenyan", "Malaysian", "Mexican", "Moroccan", "Polish", "Portuguese",
  "Russian", "Spanish", "Thai", "Tunisian", "Turkish", "Unknown", "Vietnamese"
];

const categoryNames = [
  "Beef", "Chicken", "Dessert", "Lamb", "Miscellaneous", "Pasta", "Pork",
  "Seafood", "Side", "Starter", "Vegan", "Vegetarian", "Breakfast", "Goat"
];


function filterCategory(k: string, categoryArr: string[]) {
  const regex = new RegExp(k, 'i')
  return categoryArr.filter((c) => regex.test(c))
}

export const SearchSuggestion = () => {
  const [filterList, setFilterList] = useState<string[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [show, setShow] = useState<boolean | null>(false)

  const queryKey = searchParams.get('key')

  useEffect(() => {
    if (queryKey === '') {
      setFilterList([])
    }
    if (searchParams.get('by') === 'area' && queryKey) {
      const temp = filterCategory(queryKey!, areaNames)
      setFilterList(temp)
      return
    }
    if (searchParams.get('by') === 'category' && queryKey) {
      const temp = filterCategory(queryKey!, categoryNames)
      setFilterList(temp)
      return
    }
  }, [queryKey, searchParams])

  function setKey(k: string) {
    setSearchParams((prev) => {
      const query = { key: k }
      return new URLSearchParams({
        ...Object.fromEntries(prev.entries()),
        ...query,
      });
    })
    setShow(false)
    return
  }

  if (show === false && filterList.length === 1 && searchParams.get('key') === filterList[0]) return null
  if (filterList.length === 0) return null
  if (searchParams.get('by') === 'name') return null

  return (
    <div className="absolute top-[120%] inset-x-0 bg-white shadow-xl p-3 rounded-lg max-h-[400px] overflow-y-scroll">
      <ul>
        {filterList.map((item, i) => {
          return (
            <li
              className="px-2 py-1.5 hover:bg-gray-50 rounded-md cursor-pointer"
              key={i}
              onClick={() => setKey(item)}
            >
              {item}
            </li>)
        })}
      </ul>
    </div>
  )
}
