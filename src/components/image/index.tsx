import { useState } from "react";

const Image = ({ thumbUrl }: { thumbUrl?: string }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <img
      className={`w-full rounded-4 aspect-square transition ${imageLoaded ? '' : 'bg-stone-1 opacity-0'}`}
      src={thumbUrl}
      alt="mealpad recipe"
      onLoad={() => setImageLoaded(true)}
      loading="lazy"
    />
  )
}

export default Image;
