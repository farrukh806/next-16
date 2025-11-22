'use server';
// event server actions

import Event, { IEvent } from '@/database/event.model';

export const getSimilarEventsBySlug = async (
  slug: string,
): Promise<IEvent[]> => {
  try {
    const event = await Event.findOne({ slug });
    const similarEvents = await Event.find({
      _id: { $ne: event?._id },
      tags: { $in: event?.tags || [] },
    }).lean<IEvent[]>();
    return similarEvents;
  } catch (error) {
    console.error('Error fetching similar events:', error);
    return [];
  }
};
