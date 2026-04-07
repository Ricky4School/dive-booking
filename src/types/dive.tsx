export interface Dive
{
    id: number
    name: string
    location: string
    price: number
    description: string
}

export interface Booking
{
    id: number
    diveId: number
    name: string
    date: string
}