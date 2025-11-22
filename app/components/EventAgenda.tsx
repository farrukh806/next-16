import React from 'react';

const EventAgenda = ({ agenda }: { agenda: string[] }) => {
  return (
    <div className="agenda">
      <h2>Event Agenda</h2>
      <ul>
        {agenda.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventAgenda;
