import { Outlet } from "react-router-dom"
import Header from "../components/app/Header"
import Footer from "../components/app/Footer"

export default function DefaultLayout()
{
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}