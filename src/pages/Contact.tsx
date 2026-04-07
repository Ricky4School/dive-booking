import { useEffect, useState } from "react"

interface Contact
{
  address: string
  email: string
  tel: string
  google: string
  waze: string
  iframe: string
}

export default function ContactPage()
{
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() =>
  {
    const check = () =>
    {
      setIsDesktop(window.innerWidth >= 1024)
    }

    check()
    window.addEventListener("resize", check)

    return () => window.removeEventListener("resize", check)
  }, [])

  // 👉 fake data（之后可接 API）
  const contact: Contact = {
    address: "Jetty Address, Malaysia",
    email: "info@dive.com",
    tel: "+60123456789",
    google: "https://maps.google.com",
    waze: "https://waze.com",
    iframe:
      "https://www.google.com/maps?q=Kuala+Lumpur&output=embed",
  }

  const img = isDesktop
    ? "/assets/img_intro.jpg"
    : "/assets/img_intro_mobile.jpg"

  return (
    <div className="bg-gray-100">

      <div className="max-w-6xl mx-auto p-6 space-y-12">

        {/* CARD */}
        <div className="bg-white shadow-lg">

          {/* CONTENT */}
          <div className="flex flex-col gap-4 py-6">

            {/* Address */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900">
                Jetty Address
              </h2>
              <p className="text-gray-500">
                {contact.address}
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-500">
                {contact.email}
              </p>
            </div>

            {/* Phone */}
            <div>
              <p className="font-semibold">Contact Number</p>
              <p className="text-gray-500">
                {contact.tel}
              </p>
            </div>

            {/* Notice */}
            <div>
              <p className="font-semibold">Notice</p>
              <p className="text-gray-500">
                Please arrive before 07:00 AM
              </p>
            </div>

            {/* Schedule */}
            <div>
              <p className="font-semibold">Schedule</p>
              <p className="text-gray-500">
                Departure: 07:00 AM
              </p>
              <p className="text-gray-500">
                Return: 04:00 PM
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-2 justify-center">
              <button
                onClick={() => window.open(contact.google)}
                className="bg-green-600 text-white px-4 py-2"
              >
                Google Maps
              </button>

              <button
                onClick={() => window.open(contact.waze)}
                className="bg-blue-400 text-white px-4 py-2"
              >
                Waze
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 justify-center mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="bg-gray-900 text-white p-2 rounded-full"
              >
                Facebook
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="bg-gray-900 text-white p-2 rounded-full"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/60123456789"
                target="_blank"
                className="bg-gray-900 text-white p-2 rounded-full"
              >
                WhatsApp
              </a>
            </div>

          </div>
        </div>

        {/* MAP */}
        <iframe
          src={contact.iframe}
          className="w-full h-[300px] lg:h-[400px] rounded"
        />

      </div>
    </div>
  )
}