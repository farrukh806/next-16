'use server';

import { Booking } from '@/database';
import { connectToDatabase } from '../mongodb';

export const createBooking = async (bookingData: {
  eventId: string;
  slug: string;
  email: string;
}) => {
  // Implementation for creating a booking
  try {
    await connectToDatabase();
    const booking = await Booking.create(bookingData);
    // Return a plain JS object
    return {
      success: true,
      data: {
        _id: booking._id.toString(),
        eventId: booking.eventId,
        slug: booking.slug,
        email: booking.email,
        createdAt: booking.createdAt,
        updatedAt: booking.updatedAt,
      },
    };
  } catch (error) {
    console.error('Error creating booking:', error);
    return { success: false, message: 'Failed to create booking' };
  }
};
