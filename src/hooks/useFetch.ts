import { useState, useEffect } from "react";
interface MealI {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strTags: string;
}

function useFetch(url: string) {
  const [data, setData] = useState<{
    meals: MealI[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const json = await response.json();
      setData(json ?? []);
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}

export default useFetch;
