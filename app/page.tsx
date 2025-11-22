import ExploreBtn from './components/ExploreBtn';
import EventCard from './components/EventCard';
import { use } from 'react';
import { EventService } from '@/service/event';

export default function Home() {
  const response = use(EventService.getAllEvents());
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every DEV <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups and Conferences, All in One Place
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <div className="events">
          {response.data.map((event) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
