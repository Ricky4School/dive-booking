import { useState } from "react"

interface Review
{
  id: number
  name: string
  date: string
  review: string
  rate: number
}

const reviews: Review[] = [
  {
    id: 1,
    name: "John",
    date: "17-8-2024",
    review: "Amazing diving experience!",
    rate: 5,
  },
  {
    id: 2,
    name: "Anna",
    date: "10-7-2024",
    review: "Very professional and safe.",
    rate: 4,
  },
]

const getAvatarColor = (name: string) =>
{
  const colors = ["#4f46e5", "#0ea5e9", "#10b981"]
  return colors[name.length % colors.length]
}

export default function Reviews()
{
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})

  const toggle = (id: number) =>
  {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-6">
          Reviews
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map(item => (
            <div key={item.id} className="bg-white p-6 shadow rounded-xl">

              {/* Header */}
              <div className="flex justify-between mb-4">
                <div className="flex gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ background: getAvatarColor(item.name) }}
                  >
                    {item.name[0]}
                  </div>

                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="mb-2">
                {"★".repeat(item.rate)}
              </div>

              {/* Text */}
              <p className={`text-gray-600 ${
                expanded[item.id] ? "" : "line-clamp-3"
              }`}>
                {item.review}
              </p>

              <button
                className="mt-2 text-sm"
                onClick={() => toggle(item.id)}
              >
                {expanded[item.id] ? "See Less" : "See More"}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}