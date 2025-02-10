// import { cooks } from '@/app/lib/mockData'
import { createClient } from '@/app/utils/supabase/server';
import { type Cook } from '@/lib/utils'
import Link from 'next/link'
import {
    Card
} from "@/components/ui/card"

export default async function CooksPage() {
    const supabase = await createClient();
    const { data: cooks } = await supabase.from("cooks").select();
    return (
        <>
            <h1 className='text-3xl font-bold'>Local cooks in Prahran</h1>
            <div className="container  mx-auto grid grid-cols-4 gap-5">
                {cooks.map((cook: Cook) => (
                    <Link key={cook.id} href={`cooks/${cook.id}`}>
                        <Card className="rounded shadow">
                            <div>
                                <img src={cook.logo_url} /></div>
                            <p>{cook.name}</p>
                        </Card>
                    </Link>
                ))}
            </div>
        </>
    )
}