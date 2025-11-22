import { Event } from '@/database';
import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { ApiResponse } from '@/types/api';
import { IEvent } from '@/database/event.model';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    // create an event inside mongodb events collection
    const requestBody = await request.formData();
    let event;
    try {
      event = Object.fromEntries(requestBody.entries());
      const image = requestBody.get('image') as File;

      // upload image to cloudinary
      if (!image)
        return NextResponse.json(
          { message: 'Image is required' },
          { status: 400 },
        );
      const arrayBuffer = await image.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadedImage = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { resource_type: 'image', folder: 'dev-event' },
            (error, results) => {
              if (error) return reject(error);
              resolve(results);
            },
          )
          .end(buffer);
      });
      event.image = (
        uploadedImage as { secure_url: string }
      ).secure_url;
      const createdEvent = await Event.create(event);
      return NextResponse.json(
        {
          event: createdEvent,
          message: 'Event created successfully',
        },
        { status: 201 },
      );
    } catch (error) {
      console.error(error);

      return NextResponse.json(
        { message: 'Invalid form data', stackTrace: error },
        { status: 400 },
      );
    }
  } catch (error) {
    const { message = 'Unknown error' } = error as Error;
    console.error('Error handling POST request:', error);
    return new NextResponse(`Error creating event: ${message}`, {
      status: 500,
    });
  }
}

export async function GET(): Promise<
  NextResponse<ApiResponse<IEvent[]>>
> {
  try {
    await connectToDatabase();
    const events = await Event.find().sort({ createdAt: -1 });
    return NextResponse.json(
      { data: events, success: true },
      { status: 200 },
    );
  } catch (error) {
    const { message = 'Unknown error' } = error as Error;
    console.error('Error handling GET request:', error);
    return new NextResponse(`Error fetching events: ${message}`, {
      status: 500,
    });
  }
}
