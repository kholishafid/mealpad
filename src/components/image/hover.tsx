import Ingridients from "../../assets/image/ingridients.png";
import ManCooking from "../../assets/image/man-cooking.png";
import VegCooking from "../../assets/image/veggie.png";

const CardImageHover = ({ withTitle, title }: { withTitle: boolean, title?: string }) => {

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
      {!withTitle && (
        <p
          className="font-sans font-medium text-lg text-center
            hidden group-hover:(block animate-bounce-in)"
        >
          {title}
        </p>
      )}
    </div>
  );
}

export default CardImageHover;