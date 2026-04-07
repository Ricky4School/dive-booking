import { useParams, Link } from "react-router-dom"
import { dives } from "../data/dives"
import type { Dive } from "../types/dive"

export default function DiveDetail()
{
    const { id } = useParams<{ id: string }>()

    const dive: Dive | undefined = dives.find(
        d => d.id === Number(id)
    )

    if (!dive) return <p>Not found</p>

    return (
        <div>
            <h1>{dive.name}</h1>
            <p>{dive.description}</p>
            <p>Price: ${dive.price}</p>

            <Link to={`/booking/${dive.id}`}>Book Now</Link>
        </div>
    )
}