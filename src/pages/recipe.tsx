import { useParams } from "react-router-dom";
import LoadingIndicator from "../components/loading-indicator";
import Image from "../components/image";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AppNavbar } from "../components/app-navbar";
import { Navigation } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import useLocalFav from "../hooks/useLocalFav";

function IngredientImage({ name }: { name: string }) {
  return (
    <div className="p-2 bg-stone-1 rounded-4">
      <img src={`https://www.themealdb.com/images/ingredients/${name}-small.png`} className="" alt="" />
    </div>
  )
}

const RecipePage = () => {
  const { data: fav, addToFavorite, removeFromFavorite } = useLocalFav()
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: () => axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.data)
  })

  return (
    <main className="px-4 pb-6 md:(px-8 py-0) lg:(px-10 pt-0) mx-auto min-h-[90vh]">
      {isLoading && <LoadingIndicator />}

      {!isLoading && (
        <>
          <div className="relative container mx-auto pb-8 lg:(max-w-5xl px-4)">
            <AppNavbar back="/search" />
            <div className="lg:(flex gap-8 pt-8)">
              <section className="mb-4 md:(w-1/2 mb-6) lg:(w-2/5 sticky top-8) rounded-2xl h-fit">
                <Image thumbUrl={data?.meals[0].strMealThumb} />
              </section>
              <section className="flex-1">
                <div className="flex flex-col gap-4 text-base font-sans md:(gap-6 text-lg) lg:text-xl">
                  <header>
                    <h2 className="font-sans text-3xl font-semibold mb-4 md:(text-4xl mb-8) lg:text-6xl leadng-normal max-w-[80%]">
                      {data?.meals[0].strMeal}
                    </h2>
                    <div className="flex gap-3">
                      <span className="mb-2 bg-red-400 text-white w-fit px-4 pb-0.5 rounded-full">{data?.meals[0].strCategory}</span>
                      <span className="mb-2 bg-red-400 text-white w-fit px-4 pb-0.5 rounded-full">{data?.meals[0].strArea}</span>
                      {fav?.includes(id!) ? (
                        <button className="mb-2 bg-black text-white w-fit px-4 pb-0.5 rounded-full ml-auto flex items-center gap-1" onClick={() => removeFromFavorite(id!)}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5">
                            <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                          </svg>
                          Save This
                        </button>
                      ) :
                        <button className="mb-2 bg-slate-1 w-fit px-4 pb-0.5 rounded-full ml-auto flex items-center gap-1" onClick={() => addToFavorite(id!)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                          </svg>
                          Save This
                        </button>
                      }
                    </div>
                  </header>
                  <div className="lg:w-2xl">
                    <div className="flex justify-between items-center">
                      <h3 className="mb-4 text-xl md:text-2xl font-semibold">Ingridients</h3>
                      <div className="space-x-2">
                        <button className="bg-transparent swiper-prev-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                          </svg>
                        </button>
                        <button className="bg-transparent swiper-next-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <Swiper
                      spaceBetween={16}
                      breakpoints={{
                        0: {
                          slidesPerView: 3
                        },
                        720: {
                          slidesPerView: 6
                        },
                        1024: {
                          slidesPerView: 6
                        }
                      }}
                      modules={[Navigation]}
                      navigation={{
                        prevEl: '.swiper-prev-btn',
                        nextEl: '.swiper-next-btn',
                      }}
                    >
                      {[...Array(20)].map((_, i) => {
                        if (data?.meals[0][`strIngredient${i + 1}`] === "") return null;
                        if (data?.meals[0][`strIngredient${i + 1}`] === null) return null;
                        return (
                          <SwiperSlide key={i}>
                            <IngredientImage name={data?.meals[0][`strIngredient${i + 1}`]} />
                            <div className="text-center">
                              <p>{data?.meals[0][`strIngredient${i + 1}`]}</p>
                              <span className="text-gray-5">{data?.meals[0][`strMeasure${i + 1}`]}</span>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                  <div>
                    <h4 className="mb-4 text-xl md:text-2xl font-semibold">Instruction </h4>
                    <pre className="font-sans whitespace-pre-wrap">
                      {data?.meals[0].strInstructions}
                    </pre>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {data?.meals[0].strYoutube ?
            <div className="my-16 container max-w-5xl mx-auto">
              <h4 className="mb-4 text-xl md:text-2xl font-semibold">Video Instruction :</h4>
              <iframe className="w-full aspect-video rounded-md" src={data?.meals[0].strYoutube.replace('/watch?v=', '/embed/')} allowFullScreen></iframe>
            </div>
            : null
          }
        </>
      )}
    </main>
  );
};

export default RecipePage;
