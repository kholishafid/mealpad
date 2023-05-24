import useFetch from "../../hooks/useFetch";
import Ingridients from '../../assets/image/ingridients.png'
import ManCooking from '../../assets/image/man-cooking.png'
import VegCooking from '../../assets/image/veggie.png'

const Card = ({ url }: { url: string }) => {
  const { data } = useFetch(url);
  const randomImagePrev = () => {
    const prev = [Ingridients, ManCooking, VegCooking]

    return prev[Math.floor(Math.random() * 3)]
  }


  const randomBackground = () => {
    const background = ['group-hover:bg-red', 'group-hover:bg-amber', 'group-hover:bg-emerald', 'group-hover:bg-orange']
    return background[Math.floor(Math.random() * 4)]
  }

  return (
    <div className="rounded-10 cursor-pointer bg-slate-1 group flex flex-col">
      <div className='relative w-fit h-fit grid'>
        <img
          className="w-full rounded-10"
          src={data?.meals[0].strMealThumb}
          alt="mealpad recipe"
        />
        <div className={`w-full h-full flex justify-center items-center rounded-10 absolute
        border-2 border-transparent
        group-hover:(border-black) ` + randomBackground()}>
          <img
            className='w-2/3
            hidden
            group-hover:(block animate-bounce-in) '
            src={randomImagePrev()}
            alt="mealpad ingridients"
          />
        </div>
      </div>
      <div className='p-4 h-full flex items-center justify-center'>
        <p
          className='font-sans font-medium text-lg text-center'
        >
          {data?.meals[0].strMeal}
        </p>
      </div>
    </div>
  );
}

export default Card;