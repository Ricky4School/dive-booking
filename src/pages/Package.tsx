import usePackages from "../hooks/usePackages"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function PackagePage()
{
  const { packageList, loading, error } = usePackages()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useTranslation()

  if (loading) return <p className="p-10">Loading...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">

      {packageList.map((item, index) =>
      {
        const detail = item.details[0]

        return (
          <div
            key={item.id}
            className="bg-white shadow rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setOpenIndex(index)}
          >

            <img
              src={`/package/${item.thumbnail}`}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">

              <div className="flex justify-between">
                <p className="text-blue-500 font-bold">
                  RM {item.price}
                </p>
                <p>
                  {item.packagePax} Pax
                  {item.freePax > 0 && ` + ${item.freePax} Free`}
                </p>
              </div>

              <p className="font-semibold mt-2">
                {detail.title}
              </p>

              {openIndex === index && (
                <div className="mt-3 text-sm">

                  <p className="text-green-600 font-bold">
                    {t("common.included")}
                  </p>
                  <ul className="list-disc ml-4">
                    {detail.includes.map(i => <li key={i}>{i}</li>)}
                  </ul>

                  <p className="text-red-600 font-bold mt-2">
                    {t("common.excluded")}
                  </p>
                  <ul className="list-disc ml-4">
                    {detail.excludes.map(i => <li key={i}>{i}</li>)}
                  </ul>

                </div>
              )}

            </div>
          </div>
        )
      })}

    </div>
  )
}