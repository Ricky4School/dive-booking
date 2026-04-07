import Hero from "../components/home/Hero"
import Intro from "../components/home/Intro"
import Package from "../components/home/Package"
import Reviews from "../components/home/Reviews"

export default function Home()
{
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">

      {/* <section className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold">
          Welcome to Dive Booking
        </h1>
        <p className="text-gray-500 mt-2">
          Explore amazing dive spots and book your next adventure.
        </p>
      </section> */}

      <section>
        <Hero />
        <Intro />
        <Package />
        <Reviews />
        </section>

    </div>
  )
}