import useFetch from "../../hooks/useFetch";
import Ingridients from "../../assets/image/ingridients.png";
import ManCooking from "../../assets/image/man-cooking.png";
import VegCooking from "../../assets/image/veggie.png";
import { useState } from "react";

const Card = ({
  url,
  title = true,
  className,
}: {
  url: string;
  title?: boolean;
  className?: string;
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const { data } = useFetch(url);
  const randomImagePrev = () => {
    const prev = [Ingridients, ManCooking, VegCooking];

    return prev[Math.floor(Math.random() * 3)];
  };

  const randomBackground = () => {
    const background = [
      "group-hover:bg-red",
      "group-hover:bg-amber",
      "group-hover:bg-emerald",
      "group-hover:bg-orange",
    ];
    return background[Math.floor(Math.random() * 4)];
  };

  return (
    <div className="rounded-6 md:rounded-10 cursor-pointer bg-slate-1 group flex flex-col">
      <div className={"relative  h-fit grid " + className}>
        {imageLoaded && (
          <img
            className="w-full rounded-6 md:rounded-10"
            src={data?.meals[0].strMealThumb}
            alt="mealpad recipe"
          />
        )}
        {!imageLoaded && (
          <div className='w-full aspect-square flex justify-center items-center'>
            <div className='w-fit animate-spin'>
              Loading
            </div>
          </div>
        )}
        <div
          className={
            `w-full h-full flex flex-col gap-2 justify-center items-center rounded-6 md:rounded-10 absolute
            border-2 border-transparent group-hover:(border-black) ` +
            randomBackground()
          }
        >
          <img
            className="w-2/3
            hidden
            group-hover:(block animate-bounce-in) "
            src={randomImagePrev()}
            alt="mealpad ingridients"
          />
          {!title && (
            <p
              className="font-sans font-medium text-lg text-center
            hidden group-hover:(block animate-bounce-in)"
            >
              {data?.meals[0].strMeal}
            </p>
          )}
        </div>
      </div>

      {title && (
        <div className="p-3 md:p-4 h-full flex items-center justify-center">
          <p className="font-sans font-medium text-sm md:text-lg text-center">
            {data ? data.meals[0].strMeal : <span className='animate-pulse'>Loading</span>}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
