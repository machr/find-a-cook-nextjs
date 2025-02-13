import { type Cook, cooks } from '@/app/lib/mockData'
export default async function Page({
    params,
}: {
    params: Promise<{ cook: string }>
}) {
    const cookId: string = (await params).cook
    const { cookName, location, description } = cooks.filter((cook: Cook) => cook.cookId === cookId)[0]

    return (
        <section className='flex gap-5'>
            {/* <div className='flex-1'>
                <img src={imageUrl} alt="`${cookName} logo`" />
            </div> */}
            <div className='flex-1'>
                <h2 className='text-3xl font-bold'>{cookName}</h2>
                <span className='italic'>{location}</span>
                <p>{description}</p>
            </div>
        </section>
    )
}
