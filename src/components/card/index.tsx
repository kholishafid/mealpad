import { useNavigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";
import CardImage from "../image";

interface CardPropI {
  url: string;
  title?: boolean;
  className?: string;
  keyQ: number
}

const Card = ({ url, title = true, className, keyQ }: CardPropI) => {
  const { data } = useQuery({
    queryKey: [keyQ],
    queryFn: () => axios.get(url).then((res) => res.data),
    refetchOnWindowFocus: false
  })

  const navigate = useNavigate();

  const handleRedirect = (id: string) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div
      className="rounded-6 cursor-pointer bg-stone-1 group flex flex-col"
      onClick={() => handleRedirect(data?.meals[0].idMeal ?? "0")}
    >
      <div className={"relative h-fit grid overflow-hidden " + className}>
        <CardImage thumbUrl={data?.meals[0].strMealThumb} />
      </div>

      {title && (
        <div className="p-4 flex items-center justify-center">
          <p className="font-sans font-medium md:text-lg text-center line-clamp-1">
            {data ? (
              data.meals[0].strMeal
            ) : (
              <span className="animate-pulse">Loading</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
