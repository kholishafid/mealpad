import { ChangeEvent } from "react";
import { MealResults } from "../types/meal";
import { useQuery } from "@tanstack/react-query";
import { AppNavbar } from "../components/app-navbar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/card";
import SearchFilter from "../components/search-filter";
import "../index.css";
import { SearchResult } from "../components/search-result";
import { SearchSuggestion } from "../components/search-suggestion";

type AnyFunction = (...args: any[]) => any;

function debounce<T extends AnyFunction>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: number;

  return function debouncedFunction(...args: Parameters<T>): void {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  function changeSearchKey(e: ChangeEvent<HTMLInputElement>) {
    const input = e.target;
    setSearchParams((prev) => {
      const key = { key: input.value }
      return new URLSearchParams({
        ...Object.fromEntries(prev.entries()),
        ...key,
      });
    })
  }

  const { data } = useQuery({
    queryKey: [searchParams.get('key')],
    queryFn: async (): Promise<MealResults | string> => {
      if (searchParams.get('key') && searchParams.get('by') === 'area') {
        return await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchParams.get('key')}`).then(res => res.data).then(res => res as MealResults)
      }
      if (searchParams.get('key') && searchParams.get('by') === 'name') {
        return await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParams.get('key')}`).then(res => res.data).then(res => res as MealResults)
      }
      if (searchParams.get('key') && searchParams.get('by') === 'category') {
        return await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchParams.get('key')}`).then(res => res.data).then(res => res as MealResults)
      }
      return 'Search by tyiping in search box'
    }
  })

  const debounceSearch = debounce(changeSearchKey, 300)

  return (
    <div>
      <section className="container mx-auto pb-8 lg:(max-w-5xl)">
        <div className="bg-stone-2 px-4 rounded-b-4 mb-8">
          <AppNavbar />
          <h2 className="font-medium text-xl px-2">What are you searching for</h2>
          <div className="-bottom-5 relative z-10">
            <div className="flex">
              <div className="relative w-full">
                <span className="absolute top-3 left-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </span>
                <input type="search" className="pl-11  w-full px-4 pt-2.5 pb-3 rounded-l-md focus:outline-4 focus:outline-red bg-stone-1" placeholder="Search" onChange={debounceSearch} />
                <SearchSuggestion />
              </div>
              <SearchFilter />
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-slate-7">
          {typeof data === 'string' ? data :
            <SearchResult result={data} />
          }
        </div>

        <hr className="my-8 mx-4" />

        <div className="px-4">
          <h3 className="mb-6 font-semibold text-lg">Why not try this recipee</h3>
          <div className="grid grid-cols-2 gap-4 md:(grid-cols-4)">
            {[...Array(4)].map((_, i) => (
              <Card
                title={true}
                url="https://themealdb.com/api/json/v1/1/random.php"
                key={i}
                keyQ={i}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
