import HeroImage from "../assets/image/chef.png";
import Button from "../components/button";
import Card from "../components/card/card";
import ShareImage from "../assets/image/soup-kitchen.png"
import { Link } from "react-router-dom";
import RunningText from "../components/running-text";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="py-20 bg-amber-4 border-b-2 border-black">
        <img
          className="mx-auto mb-4"
          src={HeroImage}
          alt="mealpad cook ilustration"
        />
        <h1 className="text-2xl md:text-3xl uppercase font-semibold text-center font-sans my-10">
          Colection of recipee around the world
        </h1>
        <Link to={"/search"}>
          <Button>Search Recipe</Button>
        </Link>
      </section>

      <div className='py-8'>
        <RunningText text="- Lets Cook With Me -- Lets Cook With Me -- Lets Cook With Me -" />
        <section className="running-wrapper py-8">
          <div className="running-item flex gap-8">
            <Card
              title={false}
              className="w-[200px] md:w-[300px]"
              url="https://themealdb.com/api/json/v1/1/random.php"
            />
            <Card
              title={false}
              className="w-[200px] md:w-[300px]"
              url="https://themealdb.com/api/json/v1/1/random.php"
            />
            <Card
              title={false}
              className="w-[200px] md:w-[300px]"
              url="https://themealdb.com/api/json/v1/1/random.php"
            />
            <Card
              title={false}
              className="w-[200px] md:w-[300px]"
              url="https://themealdb.com/api/json/v1/1/random.php"
            />
            <Card
              title={false}
              className="w-[200px] md:w-[300px]"
              url="https://themealdb.com/api/json/v1/1/random.php"
            />
            <Card
              title={false}
              className="w-[200px] md:w-[300px]"
              url="https://themealdb.com/api/json/v1/1/random.php"
            />
            <Card
              title={false}
              className="w-[200px] md:w-[300px]"
              url="https://themealdb.com/api/json/v1/1/random.php"
            />
            <Card
              title={false}
              className="w-[200px] md:w-[300px]"
              url="https://themealdb.com/api/json/v1/1/random.php"
            />
          </div>
        </section>
        <RunningText text="- Lets Cook With Me -- Lets Cook With Me -- Lets Cook With Me -" />
      </div>

      <section className='py-24 bg-red border-t-2 border-black'>
        <div className="mx-auto w-fit">
          <img className='mb-4' src={ShareImage} alt="mealpad - share" />
          <h2 className='font-sans font-semibold text-center text-3xl uppercase'>Dont forget to share</h2>
        </div>
      </section>

    </div>
  );
}
