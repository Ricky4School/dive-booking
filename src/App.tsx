import { Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import BookingPage from "./pages/Booking"
import BookingHistory from "./pages/BookingHistory"
import PackagePage from "./pages/Package"
import ContactPage from "./pages/Contact"

export default function App()
{
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/history" element={<BookingHistory />} />
        <Route path="/package" element={<PackagePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}