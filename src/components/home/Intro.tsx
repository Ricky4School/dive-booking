import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Intro()
{
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-4xl mx-auto text-center space-y-6">

        <h3 className="text-blue-900 text-xl font-semibold">
          {t("common.welcome")}
        </h3>

        <h2 className="text-4xl lg:text-5xl font-bold uppercase">
          {t("common.introTitle")}
        </h2>

        <div className="text-gray-600 space-y-3 max-w-2xl mx-auto">
          <p>{t("common.introDesc1")}</p>
          <p>{t("common.introDesc2")}</p>
          <p>{t("common.introDesc3")}</p>
        </div>

        <div className="pt-4">
          <Link
            to="/booking"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
          >
            {t("common.bookNow")}
          </Link>
        </div>

      </div>

    </section>
  )
}