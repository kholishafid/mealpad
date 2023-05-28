import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingIndicator from "../components/loading-indicator";
import Image from "../components/image";
// import HeartIcon from "../assets/icon/heart.svg"

const RecipePage = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  return (
    <main className="container px-4 py-6 md:(px-8 py-10) lg:(px-10 py-16) mx-auto min-h-[90vh]">
      {isLoading && <LoadingIndicator />}

      {!isLoading && (
        <div className="lg:(flex gap-8)">
          <section className="mb-4 md:(w-1/2 mb-6) lg:w-2/5 rounded-2xl">
            <Image thumbUrl={data?.meals[0].strMealThumb} />
            {/* <img src={HeartIcon} alt="" /> */}
          </section>

          <section className="px-1 flex-1">
            <div className="flex flex-col gap-4 text-base font-sans md:(gap-6 text-lg) lg:text-xl">
              <header>
                <h2 className="font-sans text-2xl font-semibold underline underline-slate mb-4 md:(text-3xl mb-6) lg:text-5xl  ">
                  {data?.meals[0].strMeal}
                </h2>
                <p className="mb-2">Category : {data?.meals[0].strCategory}</p>
                <p className="mb-2">Origin : {data?.meals[0].strArea}</p>
              </header>

              <main>
                <p className="mb-2">Ingredients : </p>
                <div className="flex gap-8 mb-2">
                  <div>
                    {[...Array(20)].map((_, i) => {
                      if (data?.meals[0][`strIngredient${i + 1}`] === "")
                        return "";
                      return (
                        <li key={i} className="list-decimal">
                          {data?.meals[0][`strIngredient${i + 1}`]}
                        </li>
                      );
                    })}
                  </div>
                  <div>
                    {[...Array(20)].map((_, i) => {
                      if (data?.meals[0][`strIngredient${i + 1}`] === "")
                        return "";
                      return (
                        <li key={i} className="list-none">
                          {data?.meals[0][`strMeasure${i + 1}`]}
                        </li>
                      );
                    })}
                  </div>
                </div>
              </main>

              <footer>
                <p className="mb-2">Instruction :</p>
                <pre className="font-sans whitespace-pre-wrap">
                  {data?.meals[0].strInstructions}
                </pre>
              </footer>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default RecipePage;
