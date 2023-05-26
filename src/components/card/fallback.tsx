import LoadingIcon from "../../assets/icon/timer.svg";

const CardImageFallback = () => {
  return (
    <div className="w-full aspect-square flex justify-center items-center">
      <div className="w-fit">
        <img src={LoadingIcon} className="w-10 rotate-90 mx-auto mb-2" alt="mealpad loading" />
      </div>
    </div>
  );
}

export default CardImageFallback;