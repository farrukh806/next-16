import { Schema, model, models, Document } from 'mongoose';

/**
 * TypeScript interface for Event document.
 */
export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: 'online' | 'offline' | 'hybrid';
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Mongoose schema for Event.
 */
const EventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    slug: { type: String, lowercase: true, trim: true },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    overview: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },
    image: { type: String, required: true, trim: true },
    venue: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    mode: {
      type: String,
      required: true,
      enum: ['online', 'offline', 'hybrid'],
    },
    audience: { type: String, required: true, trim: true },
    agenda: {
      type: [String],
      required: true,
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: 'At least one agenda item is required.',
      },
    },
    organizer: { type: String, required: true, trim: true },
    tags: {
      type: [String],
      required: true,
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: 'At least one tag is required.',
      },
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields.
  },
);

/**
 * Pre-save hook to generate slug and normalize date/time.
 */
EventSchema.pre('save', function (next) {
  const event = this as IEvent;

  // Generate slug if title is modified or document is new.
  if (event.isModified('title') || event.isNew) {
    event.slug = generateSlug(event.title);
  }

  // Normalize date to ISO format.
  if (event.isModified('date')) {
    event.date = normalizeDate(event.date);
  }

  // Normalize time to HH:MM format.
  if (event.isModified('time')) {
    event.time = normalizeTime(event.time);
  }

  next();
});

/**
 * Helper function to generate a URL-friendly slug.
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters.
    .replace(/\s+/g, '-') // Replace spaces with hyphens.
    .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen.
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens.
}

/**
 * Helper function to normalize date to ISO format.
 */
function normalizeDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format.');
  }
  return date.toISOString().split('T')[0]; // Return YYYY-MM-DD format.
}

/**
 * Helper function to normalize time to HH:MM format.
 */
function normalizeTime(timeString: string): string {
  const timeRegex = /^([0-9]{1,2}):([0-9]{2})(\s*(AM|PM))?$/i;
  const match = timeString.trim().match(timeRegex);

  if (!match) {
    throw new Error('Invalid time format. Use HH:MM or HH:MM AM/PM.');
  }

  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const period = match[4]?.toUpperCase();

  if (period) {
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
  }

  if (
    hours < 0 ||
    hours > 23 ||
    parseInt(minutes, 10) < 0 ||
    parseInt(minutes, 10) > 59
  ) {
    throw new Error('Invalid time values.');
  }

  return `${hours.toString().padStart(2, '0')}:${minutes}`;
}

// Create unique index on slug for better performance.
EventSchema.index({ slug: 1 }, { unique: true });

// Create compound index for common queries.
EventSchema.index({ date: 1, mode: 1 });

const Event = models.Event || model<IEvent>('Event', EventSchema);

export default Event;
