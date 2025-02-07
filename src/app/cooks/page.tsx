import { type Cook } from '@/app/lib/mockData'
import {
    Card
} from "@/components/ui/card"

export default async function CooksPage() {
    const res = await fetch('http://localhost:3000/api/cooks')
    const data = await res.json()
    const { cooks } = data

    return (
        <>
            <h1 className='text-3xl font-bold'>Local cooks in Prahran</h1>
            <div className="container  mx-auto grid grid-cols-4 gap-5">
                {cooks.map((cook: Cook) => (
                    <Card key={cook.cookId} className="rounded shadow">
                        <div>
                            <img src={cook.imageUrl} /></div>
                        <p>{cook.cookName}</p>
                    </Card>
                ))}
            </div>
        </>
    )
}