import { connectToDatabase } from '../../../../../lib/db'; 
import Event from '../../../../../models/Event'; 

export async function GET(request, { params }) {
    await connectToDatabase();

    const { id } = params; 

    try {
        const event = await Event.findById(id); 
        if (event) {
            return new Response(JSON.stringify(event), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify({ error: 'Event not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch event' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
