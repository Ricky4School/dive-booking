import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Header()
{
  const { t, i18n } = useTranslation()

  const links = [
    { label: t("common.package"), to: "/package" },
    { label: t("common.booknow"), to: "/booking" },
    { label: t("common.history"), to: "/history" },
    { label: t("common.contactUs"), to: "/contact" },
  ]

  const changeLang = (lang: string) =>
  {
    i18n.changeLanguage(lang)
    localStorage.setItem("lang", lang)
  }

  return (
    <header className="bg-gray-900 text-white shadow">
      <div className="border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-16">

          <Link to="/" className="font-bold text-lg">
            🌊 Dive
          </Link>

          <nav className="hidden md:flex gap-6">
            {links.map(link => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            <button onClick={() => changeLang("en")}>EN</button>
            <button onClick={() => changeLang("zh")}>中文</button>
          </div>

        </div>
      </div>
    </header>
  )
} 