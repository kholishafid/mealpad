import { useEffect, useState } from "react";

function useLocalFav() {
  const [data, setData] = useState<string[] | null>(null);

  useEffect(() => {
    const localStorageInstance = localStorage.getItem("mealpad-fav");

    if (localStorageInstance) {
      getLocalStorage();
    } else {
      initLocalStorage();
    }
  }, []);

  useEffect(() => {
    if (data != null || data != undefined) {
      syncLocalStorage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const initLocalStorage = () => {
    localStorage.setItem("mealpad-fav", JSON.stringify([]));
  };

  const getLocalStorage = () => {
    const localData = localStorage.getItem("mealpad-fav");
    const parsedData = JSON.parse(localData ?? "");
    setData(parsedData);
  };

  const syncLocalStorage = () => {
    const dataToSync = JSON.stringify(data);
    localStorage.setItem("mealpad-fav", dataToSync);
  };

  const addToFavorite = (id: string) => {
    if (data && !data?.includes(id)) {
      setData([...data, id]);
    }
  };

  const removeFromFavorite = (id: string) => {
    if (data) {
      setData(data.filter((e) => e !== id));
    }
  };

  return {
    data,
    addToFavorite,
    removeFromFavorite,
  };
}

export default useLocalFav;
