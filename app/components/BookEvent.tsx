'use client';

import { createBooking } from '@/lib/actions/booking.actions';
import { useState } from 'react';
import toast from 'react-hot-toast';

type BookEventProps = {
  eventId: string;
  slug: string;
};

const BookEvent = ({ eventId, slug }: BookEventProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    // Here you would typically handle the booking logic, e.g., sending the email to your server'
    e.preventDefault();
    const bookingData = {
      eventId, // Replace with actual event ID
      slug, // Replace with actual event slug
      email,
    };
    const response = await createBooking(bookingData);
    if (response.success) {
      console.log('Booking successful:', response.data);
      toast.success('Booking successful!');
      setIsSubmitted(true);
    } else {
      console.error('Booking failed:', response.message);
      toast.error(
        'Booking failed. Please try again.\n' + response.message,
      );
    }
  };
  return (
    <div id="book-event">
      {isSubmitted ? (
        <p className="success-message">Thank you for booking!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              required
              placeholder="Enter your email address"
            />
          </div>
          <button type="submit" className="button-submit">
            Book Now
          </button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
