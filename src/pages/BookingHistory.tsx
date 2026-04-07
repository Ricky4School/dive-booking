import { useEffect, useState } from "react"

interface Booking
{
  id: number
  name: string
  date: string
  pax: number
}

export default function BookingHistory()
{
  const [bookings, setBookings] = useState<Booking[]>([])

  useEffect(() =>
  {
    const data = localStorage.getItem("bookings")
    if (data) setBookings(JSON.parse(data))
  }, [])

  const remove = (id: number) =>
  {
    const updated = bookings.filter(b => b.id !== id)
    setBookings(updated)
    localStorage.setItem("bookings", JSON.stringify(updated))
  }

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Booking History
      </h1>

      {bookings.length === 0 && (
        <p>No bookings yet.</p>
      )}

      <div className="space-y-4">
        {bookings.map(b => (
          <div
            key={b.id}
            className="bg-white p-4 rounded shadow flex justify-between"
          >
            <div>
              <p className="font-semibold">{b.name}</p>
              <p className="text-sm text-gray-500">
                {b.date} • {b.pax} pax
              </p>
            </div>

            <button
              onClick={() => remove(b.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}