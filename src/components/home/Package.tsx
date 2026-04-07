import usePackages from "../../hooks/usePackages"

export default function HomePackage()
{
  const { packageList, loading, error } = usePackages()

  if (loading) return <p>Loading...</p>
  if (error) return <p className="text-red-500">{error}</p>
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {packageList.slice(0, 3).map(item =>
        {
          const detail = item.details[0]

          return (
            <div key={item.id} className="bg-white text-black p-4 rounded">

              <img
                src={`/package/${item.thumbnail}`}
                className="w-full h-40 object-cover rounded"
              />

              <h3 className="font-bold mt-2">
                {detail.title}
              </h3>

              <p className="text-blue-500">
                RM {item.price}
              </p>

            </div>
          )
        })}

      </div>
    </section>
  )
}