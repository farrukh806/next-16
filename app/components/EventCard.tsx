import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type EventCardProps = {
  image: string;
  title: string;
  date: string;
  location: string;
  time: string;
};

const EventCard: React.FC<EventCardProps> = (
  props,
) => {
  const { image, title, date, location, time } =
    props;
  return (
    <Link
      href={'/events'}
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
      <p className="event-date">
        {date} at {time}
      </p>
      <p className="event-location">{location}</p>
    </Link>
  );
};

export default EventCard;
