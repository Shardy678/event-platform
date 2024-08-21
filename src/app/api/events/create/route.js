'use server';

import { connectToDatabase } from '../../../../../lib/db';
import Event from '../../../../../models/Event';

export async function POST(request) {
    try {
        await connectToDatabase();

        const data = await request.json();
        const { title, location, description } = data;

        const newEvent = new Event({ title, location, description });
        await newEvent.save();

        return new Response(
            JSON.stringify({ message: 'Event created successfully' }),
            {
                status: 201,
                headers: { 'Content-Type': 'application/json' },
            }
        );

    } catch (error) {
        console.error('Error creating event:', error);

        return new Response(
            JSON.stringify({ error: 'Failed to post event' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
