import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

interface Booking
{
  id: number
  name: string
  date: string
  pax: number
}

export default function BookingPage()
{
  const navigate = useNavigate()

  const { t } = useTranslation()

  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [pax, setPax] = useState(1)

  const handleSubmit = () =>
  {
    if (!name || !date)
    {
      alert("Please fill all fields")
      return
    }

    const existing = localStorage.getItem("bookings")
    const bookings: Booking[] = existing
      ? JSON.parse(existing)
      : []

    const newBooking: Booking = {
      id: Date.now(),
      name,
      date,
      pax,
    }

    bookings.push(newBooking)

    localStorage.setItem("bookings", JSON.stringify(bookings))

    navigate("/history")
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl">

      <h1 className="text-2xl font-bold mb-4">
        {t("common.bookYourDive")}
      </h1>

      <div className="space-y-4">

        <input
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <input
          type="number"
          min={1}
          className="w-full border p-2 rounded"
          value={pax}
          onChange={e => setPax(Number(e.target.value))}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          {t("common.confirmBooking")}
        </button>

      </div>

    </div>
  )
}