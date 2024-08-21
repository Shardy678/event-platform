import { connectToDatabase } from '../../../../lib/db'
import Event from '../../../../models/Event';

export async function GET() {
    await connectToDatabase();

    try {
        const events = await Event.find();
        return new Response(JSON.stringify(events), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch events' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
