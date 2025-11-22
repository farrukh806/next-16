import { IEvent } from '@/database/event.model';
import { API_ENDPOINTS } from '@/lib/constants';
import { FetchHelper } from '@/lib/fetch-helper';
import { ApiResponse } from '@/types/api';

export const EventService = {
  getAllEvents: async () => {
    try {
      return await FetchHelper.get<ApiResponse<IEvent[]>>(
        API_ENDPOINTS.EVENTS,
      );
    } catch (error) {
      return { data: [], error };
    }
  },
  createEvent: async (formData: FormData) => {
    try {
      return await FetchHelper.postFormData<IEvent>(
        API_ENDPOINTS.EVENTS,
        formData,
      );
    } catch (error) {
      return { data: null, error };
    }
  },
  getEventBySlug: async (slug: string) => {
    try {
      return await FetchHelper.get<ApiResponse<IEvent>>(
        `${API_ENDPOINTS.EVENTS}/${slug}`,
      );
    } catch (error) {
      return { data: null, error };
    }
  },
};
