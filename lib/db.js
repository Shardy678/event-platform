import mongoose from 'mongoose';

export async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/event-platform');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        throw new Error('Failed to connect to MongoDB');
    }
}
