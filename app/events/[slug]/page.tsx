import { formatImageUrl } from '@/lib/utils';
import { EventService } from '@/service/event';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';
import EventDetailItem from '../../components/EventDetailItem';
import EventAgenda from '../../components/EventAgenda';
import EventTags from '../../components/EventTags';
import BookEvent from '@/app/components/BookEvent';
import { getSimilarEventsBySlug } from '@/lib/actions/event.actions';
import EventCard from '@/app/components/EventCard';

const EventDetailsPage = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = use(params);
  const response = use(EventService.getEventBySlug(slug));

  if (!response.data) return notFound();
  const event = response.data;
  const similarEvents = use(getSimilarEventsBySlug(slug));

  return (
    <section id="event">
      <div className="header">
        <h1>Event Description</h1>
        <p className="mt-2">{event.description}</p>
      </div>
      <div className="details">
        {/* Left side  */}

        <div className="content">
          <Image
            src={formatImageUrl(event.image, {
              width: 800,
              height: 800,
            })}
            width={800}
            height={800}
            alt={event.title}
            className="banner"
          />

          <section className="flex-col-gap-2">
            <h2>Overview</h2>
            <p>{event.overview}</p>
          </section>

          <section className="flex-col-gap-2">
            <h2>Event Details</h2>
            <EventDetailItem
              icon="/icons/calendar.svg"
              alt="calendar"
              label={event.date}
            />
            <EventDetailItem
              icon="/icons/clock.svg"
              alt="clock"
              label={event.time}
            />
            <EventDetailItem
              icon="/icons/pin.svg"
              alt="location"
              label={event.location}
            />
            <EventDetailItem
              icon="/icons/globe.svg"
              alt="venue"
              label={event.venue}
            />
            <EventDetailItem
              icon="/icons/mode.svg"
              alt="mode"
              label={event.mode}
            />
          </section>

          <EventAgenda agenda={event.agenda} />
          <section className="flex-col-gap-2">
            <h2>About the Organizer</h2>
            <p>{event.organizer}</p>
          </section>

          <EventTags tags={event.tags} />
        </div>

        {/* Right side */}
        <aside className="booking">
          <div className="signup-card">
            <h2>Book Your Spot</h2>
            <p className="text-sm">
              Join {10} people who have already booked their spot!
            </p>
            <p className="text-sm">Be the first to book your spot!</p>
            <BookEvent />
          </div>
        </aside>
      </div>

      {similarEvents.length && (
        <div className="flex w-full flex-col gap-4 pt-20">
          <h2>Similar Events</h2>
          <div className="events">
            {similarEvents.map((event) => (
              <EventCard {...event} key={event._id.toString()} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventDetailsPage;
