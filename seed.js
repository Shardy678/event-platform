const mongoose = require('mongoose');
const Event = require('./models/Event'); // Adjust the path based on your project structure

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/event-platform', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    const events = [
        {
            title: 'Tango Night',
            location: 'Moscow',
            description: 'Immerse yourself in the passionate rhythms of Tango in the heart of Moscow.',
        },
        {
            title: 'Waltz Evening',
            location: 'Amsterdam',
            description: 'Step into a world of grace and tradition with a Waltz session in Amsterdam.',
        },
        {
            title: 'Book Club Gathering',
            location: 'Oslo',
            description: 'Join fellow book lovers in Oslo for an engaging discussion at our Book Club meeting.',
        },
        {
            title: 'Rock Concert',
            location: 'Sofia',
            description: 'Unleash your inner rocker at the Rock Club in Sofia.',
        },
    ];

    await Event.insertMany(events);
    console.log('Database seeded with events');

    mongoose.connection.close();
}

main().catch(err => console.error('Failed to seed database:', err));
