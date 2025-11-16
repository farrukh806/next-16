import ExploreBtn from './components/ExploreBtn';
import EventCard from './components/EventCard';
import { EVENTS } from '@/lib/constants';

export default function Home() {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every DEV <br /> Event You
        Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups and Conferences, All
        in One Place
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <div className="events">
          {EVENTS.map((event) => (
            <EventCard
              key={event.id}
              date={event.date}
              location="Location 1"
              image={event.image}
              title="Event"
              time={event.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
