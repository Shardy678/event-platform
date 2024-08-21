'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Create() {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const response = await fetch('/api/events/create', {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Something went wrong');
            }

            setSuccess(result.message);
            setError(null);
        } catch (error) {
            setError(error.message);
            setSuccess(null);
        }
    }

    return (
        <>
            <h1>Create New Event</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title</label>
                <input type="text" name="title" id="title" required />

                <label htmlFor='location'>Location</label>
                <input type="text" name="location" id="location" required />

                <label htmlFor='description'>Description</label>
                <input type="text" name="description" id="description" required />

                <button type="submit">Submit</button>
            </form>
            <Link href={'/events'}>Go back</Link>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </>
    );
}
