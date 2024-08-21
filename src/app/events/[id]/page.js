'use client'

import { useState,useEffect } from "react"
import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function Show() {
    const [event, setEvent] = useState([]);
    const pathname = usePathname()
    const id = pathname.split('/').pop();
    useEffect(() => {
        async function fetchEvent() {
            const response = await fetch(`/api/events/${id}`);
            const data = await response.json();
            setEvent(data);
        }

        fetchEvent();
    }, []);

    return (
        <div key={event._id}>
            <h2>{event.title}</h2>
            <h3>{event.location}</h3>
            <p>{event.description}</p>
            <Link href={'/events'}>Go back</Link>
        </div>
    )
}