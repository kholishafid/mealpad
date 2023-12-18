import { useNavigate } from "react-router-dom"
import useLocalFav from "../hooks/useLocalFav"
import Card from "../components/card"

export default function BookmarkPage() {
  const { data } = useLocalFav()
  const navigate = useNavigate()
  return (
    <main className="container max-w-5xl px-4 py-6 md:(px-8 py-0) lg:(px-4 py-0) mx-auto min-h-[90vh]">
      <nav className="flex justify-between h-20">
        <button onClick={() => navigate(-1)} className="bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button onClick={() => navigate('/')} className="bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </button>
      </nav>
      <section className="py-6">
        <h3 className="mb-4 text-xl md:text-2xl font-semibold">Your Bookmark</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data?.map((mealId, i) => {
            return (
              <Card
                title={true}
                url={`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`}
                key={i}
                keyQ={parseInt(mealId)}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}
