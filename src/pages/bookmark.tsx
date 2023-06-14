import Card from "../components/card"
import useLocalFav from "../hooks/useLocalFav"

export default function BookmarkPage() {
  const { data } = useLocalFav()
  return (
    <main className="container px-4 py-6 md:(px-8 py-10) lg:(px-10 py-16) mx-auto min-h-[90vh]">
      <div className="grid grid-cols-2 gap-4 md:(grid-cols-3 px-8) lg:grid-cols-4 md:gap-8">
        {data?.map((e) => {
          return <Card key={e} url={`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`} />
        })}
      </div>
    </main>
  )
}