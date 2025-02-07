import { cooks } from '../../lib/mockData'
export async function GET() {
    return Response.json({cooks})
}