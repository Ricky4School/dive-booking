import { useEffect, useState } from "react"

const slides = [
  {
    id: 1,
    img: "/assets/hero1.jpg",
    title: "Dive Into Paradise",
    desc: "Explore the ocean like never before",
  },
  {
    id: 2,
    img: "/assets/hero2.jpg",
    title: "Discover New Depths",
    desc: "Professional diving experiences",
  },
  {
    id: 3,
    img: "/assets/hero3.jpg",
    title: "Adventure Awaits",
    desc: "Book your next dive today",
  },
]

export default function Hero()
{
  const [index, setIndex] = useState(0)

  useEffect(() =>
  {
    const interval = setInterval(() =>
    {
      setIndex(prev => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const prev = () =>
  {
    setIndex(prev =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  const next = () =>
  {
    setIndex(prev => (prev + 1) % slides.length)
  }

  return (
    <section className="relative h-[70vh] overflow-hidden">

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold">
                {slide.title}
              </h1>
              <p className="mt-2">{slide.desc}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 text-white text-2xl"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 text-white text-2xl"
      >
        ›
      </button>

    </section>
  )
}