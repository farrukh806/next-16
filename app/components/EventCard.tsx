import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type EventCardProps = {
  image: string;
  title: string;
  date: string;
  location: string;
  time: string;
  slug: string;
};

const EventCard: React.FC<EventCardProps> = (props) => {
  const { image, title, date, location, time, slug } = props;
  return (
    <Link
      href={`/events/${slug}`}
      id="event-card"
      className="event-card list-none"
    >
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      />
      <p className="title">{title}</p>
      <div className="flex flex-row gap-2">
        <Image
          src={'/icons/pin.svg'}
          alt="Location Icon"
          width={12}
          height={12}
        />
        <p className="event-location">{location}</p>
      </div>
      <div className="flex flex-row gap-4"></div>
      <div className="flex flex-row gap-2">
        <Image
          src={'/icons/calendar.svg'}
          alt="Calendar Icon"
          width={12}
          height={12}
        />
        <p className="event-date">{date}</p>
        <Image
          src={'/icons/clock.svg'}
          alt="Clock Icon"
          width={12}
          height={12}
        />
        <p className="event-time">{time}</p>
      </div>
    </Link>
  );
};

export default EventCard;
