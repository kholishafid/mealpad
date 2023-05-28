import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import CardImage from "../image";
import CardImageHover from "../image/hover";

interface CardPropI {
  url: string;
  title?: boolean;
  className?: string;
}

const Card = ({ url, title = true, className }: CardPropI) => {
  const { data } = useFetch(url);

  const navigate = useNavigate();

  const handleRedirect = (id: string) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div
      className="rounded-6 md:rounded-10 cursor-pointer bg-slate-1 group flex flex-col"
      onClick={() => handleRedirect(data?.meals[0].idMeal ?? "0")}
    >
      <div className={"relative  h-fit grid " + className}>
        <CardImage thumbUrl={data?.meals[0].strMealThumb} />

        <CardImageHover withTitle={title} title={data?.meals[0].strMeal} />
      </div>

      {title && (
        <div className="px-3 py-2 h-full flex items-center justify-center">
          <p className="font-sans font-medium text-sm md:text-lg text-center">
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
