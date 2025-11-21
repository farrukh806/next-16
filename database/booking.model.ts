import { Schema, model, models, Document, Types } from 'mongoose';
import Event from './event.model';

/**
 * TypeScript interface for Booking document.
 */
export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Mongoose schema for Booking.
 */
const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: true,
      validate: {
        validator: async function (value: Types.ObjectId) {
          const eventExists = await Event.exists({ _id: value });
          return !!eventExists;
        },
        message: 'Referenced event does not exist.',
      },
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (email: string) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email); // Ensure validation returns a boolean.
        },
        message: 'Invalid email format.',
      },
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields.
  },
);

// Create index on eventId for faster queries.
BookingSchema.index({ eventId: 1 });

const Booking =
  models.Booking || model<IBooking>('Booking', BookingSchema);

export default Booking;
