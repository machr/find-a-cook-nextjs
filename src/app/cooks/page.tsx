import { cooks } from '@/app/lib/mockData'
import Link from 'next/link'
import {
    Card
} from "@/components/ui/card"

export default async function CooksPage() {
    return (
        <>
            <h1 className='text-3xl font-bold'>Local cooks in Prahran</h1>
            <div className="container  mx-auto grid grid-cols-4 gap-5">
                {cooks.map(cook => (
                    <Link key={cook.cookId} href={`cooks/${cook.cookId}`}>
                        <Card className="rounded shadow">
                            <div>
                                <img src={cook.imageUrl} /></div>
                            <p>{cook.cookName}</p>
                        </Card>
                    </Link>
                ))}
            </div>
        </>
    )
}