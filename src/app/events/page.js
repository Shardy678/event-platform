'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Index() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            const response = await fetch('/api/events');
            const data = await response.json();
            setEvents(data);
        }

        fetchEvents();
    }, []);

    return (
        <div>
            <h1>All Events</h1>
            <Link href={'/events/create'}>Create new</Link>
            <ul>
                {events.map(event => (
                    <li key={event._id}>
                        <Link href={`/events/${event._id}`}>{event.title}</Link>
                        <p>{event.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
