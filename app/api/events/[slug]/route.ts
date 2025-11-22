// get event by slug
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Event } from '@/database';
import { ApiResponse, IParams } from '@/types/api';
import { IEvent } from '@/database/event.model';

export async function GET(
  request: NextRequest,
  { params }: IParams,
): Promise<NextResponse<ApiResponse<IEvent | null>>> {
  try {
    await connectToDatabase();
    const { slug } = await params;
    if (!slug || typeof slug !== 'string') {
      return NextResponse.json(
        {
          data: null,
          message: 'Invalid slug parameter',
          success: false,
        },
        { status: 400 },
      );
    }
    const _slug = slug.trim().toLocaleLowerCase();
    const event = await Event.findOne({ slug: _slug });
    if (!event) {
      return NextResponse.json(
        { message: 'Event not found', success: false, data: null },
        { status: 404 },
      );
    }
    return NextResponse.json(
      { data: event, success: true },
      { status: 200 },
    );
  } catch (error) {
    const { message = 'Unknown error' } = error as Error;
    console.error('Error handling GET request:', error);
    return new NextResponse(`Error fetching event: ${message}`, {
      status: 500,
    });
  }
}
