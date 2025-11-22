'use client';

import { useState } from 'react';

const BookEvent = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the booking logic, e.g., sending the email to your server
    setIsSubmitted(true);
  };
  return (
    <div id="book-event">
      {isSubmitted ? (
        <p className="success-message">
          Thank you for booking! A confirmation email has been sent to{' '}
          {email}.
        </p>
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
