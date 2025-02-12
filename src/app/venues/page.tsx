import { createClient } from '@/app/utils/supabase/server';
import { type Venue } from '@/lib/utils'
import Link from 'next/link'
import {
    Card
} from '@/components/ui/card'

export default async function CooksPage() {
    const supabase = await createClient();
    const { data: venues } = await supabase.from("venues").select();
    return (
        <>
            <h1 className='text-3xl font-bold'>Local venues in Prahran</h1>
            <div className="container  mx-auto grid grid-cols-4 gap-5">
                {venues!.map((venue: Venue) => (
                    <Link key={venue.id} href={`venues/${venue.id}`}>
                        <Card className="rounded shadow">
                            <div>
                                <img alt={`${venue} logo`} src={venue.logo_url} /></div>
                            <p>{venue.name}</p>
                        </Card>
                    </Link>
                ))}

                {!venues && (
                    <div>No Cooks found</div>
                )}
            </div>
        </>
    )
}