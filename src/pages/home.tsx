import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden h-[100vh]">
      <Navbar />
      <section className="pt-8 px-4 bg-stone-200 relative md:(pb-24 pt-32)">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-4 z-10 md:(text-center w-[60%] block mx-auto)">
            <h1 className="text-3xl font-semibold mb-6 leading-normal md:(text-5xl leading-normal)">Wellcome to Mealpad: Your Culinary Playground Awaits!</h1>
            <p className="leading-relaxed">Turn your kitchen into a happy place with MealPad! Discover delightful recipes and interactive features that make cooking pure joy.</p>
          </div>
        </div>
        <Link to={'/search'} role="button" className="px-4 py-3 bg-stone-800 text-white rounded-md inline-block md:(block mx-auto w-fit)">
          Get Started
        </Link>
        <div className="h-40 w-full ">
          <img src="/dish-1.png" alt="bowl" className="absolute -bottom-32 -right-18 rotate-8 -scale-x-100 w-52 md:(right-4 scale-100) lg:(right-1/4)" />
          <img src="/bowl-salad.png" alt="bowl" className="hidden absolute -bottom-32 -left-8 rotate-8 md:(block -left-4 -rotate-6) lg:(left-1/4 -rotate-4)" />
          <img src="/bowl-illust.png" alt="bowl" className="absolute -bottom-32 -left-8 rotate-8 md:(left-1/3 rotate-0) lg:(left-2/5 rotate-2)" />
          <div className="absolute -bottom-42 left-1/2 -translate-x-1/2">
            <p className="mb-4">Illustration by : <a href="https://blush.design/artists/elsma-ramirez" className="underline underline-red underline-offset-2">Elsma Ramirez</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
