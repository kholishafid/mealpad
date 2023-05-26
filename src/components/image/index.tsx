import { useState } from "react";
import LoadingIcon from "../../assets/icon/timer.svg";

const Image = ({ thumbUrl }: { thumbUrl?: string }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <>
      <img
        className={`w-full rounded-6 md:rounded-10 ${imageLoaded ? 'block' : 'hidden'}`}
        src={thumbUrl}
        alt="mealpad recipe"
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && (
        <div className="w-full aspect-square flex justify-center items-center">
          <div className="w-fit animate-spin">
            <img src={LoadingIcon} className="w-10" alt="" />
          </div>
        </div>
      )}
    </>
  )
}

export default Image;