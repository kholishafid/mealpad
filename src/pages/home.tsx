import HeroImage from '../assets/image/chef.png'
import Button from '../components/button'
import Card from '../components/card/card'
import RecommendationImage from '../assets/image/cook-recipe.png'
import CookWithMe from '../assets/image/ingridients.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <section className='py-20 bg-amber-4'>
        <img
          className='mx-auto mb-4'
          src={HeroImage}
          alt="mealpad cook ilustration"
        />
        <h1 className='text-2xl md:text-3xl uppercase font-semibold text-center font-sans my-10'>
          Colection of recipee around the world
        </h1>
        <Link to={'/search'}>
          <Button>
            Search Recipe
          </Button>
        </Link>
      </section>

      <section>
        <div className='running-wrapper'>
          <div className='running-item'>
            <h2 className='font-sans font-semibold uppercase text-lg'>
              - Lets Cook With Me -- Lets Cook With Me -- Lets Cook With Me -
            </h2>

            <h2 className='font-sans font-semibold uppercase text-lg'>
              - Lets Cook With Me -- Lets Cook With Me -- Lets Cook With Me -
            </h2>

            <h2 className='font-sans font-semibold uppercase text-lg'>
              - Lets Cook With Me - Lets Cook With Me -- Lets Cook With Me -
            </h2>

            <h2 className='font-sans font-semibold uppercase text-lg'>
              - Lets Cook With Me -- Lets Cook With Me -- Lets Cook With Me -
            </h2>
          </div>
        </div>
      </section>

      <section className='my-16'>
        <div className='flex'>
          <img className='mb-4' src={RecommendationImage} alt="mealpad recommendation" />
          <img className='mb-4' src={HeroImage} alt="mealpad recommendation" />
          <img className='mb-4' src={CookWithMe} alt="mealpad recommendation" />
        </div>
      </section>

      <section>
        <div className='running-wrapper'>
          <div className='running-item'>
            <h2 className='font-sans font-semibold uppercase text-lg'>
              - Lets Cook With Me -- Lets Cook With Me -- Lets Cook With Me -
            </h2>

            <h2 className='font-sans font-semibold uppercase text-lg'>
              - Lets Cook With Me -- Lets Cook With Me -- Lets Cook With Me -
            </h2>

            <h2 className='font-sans font-semibold uppercase text-lg'>
              - Lets Cook With Me - Lets Cook With Me -- Lets Cook With Me -
            </h2>

            <h2 className='font-sans font-semibold uppercase text-lg'>
              - Lets Cook With Me -- Lets Cook With Me -- Lets Cook With Me -
            </h2>
          </div>
        </div>
      </section>

      <section className='px-4 py-16'>
        <div className='flex flex-col  items-center justify-center mb-20'>
          <h1 className='text-2xl font-sans font-semibold text-center'>Try Our Recommendation</h1>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-4'>
          <Card url='https://themealdb.com/api/json/v1/1/random.php' />
          <Card url='https://themealdb.com/api/json/v1/1/random.php' />
          <Card url='https://themealdb.com/api/json/v1/1/random.php' />
          <Card url='https://themealdb.com/api/json/v1/1/random.php' />
        </div>
      </section>
    </div>
  )
}