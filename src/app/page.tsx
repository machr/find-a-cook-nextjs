import mockData from './lib/mockData.json'
import {
  Card
} from "@/components/ui/card"

const cooks = mockData
export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold'>Local cooks in Prahran</h1>
      <div className="container  mx-auto grid grid-cols-4 gap-5">
        {cooks.map(cook => (
          <Card key={cook.cookId} className="rounded shadow">
            <div>
              <img src={cook.imageUrl} /></div>
            <p>{cook.cookName}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
