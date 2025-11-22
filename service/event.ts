import { IEvent } from '@/database/event.model';
import { API_ENDPOINTS } from '@/lib/constants';
import { FetchHelper } from '@/lib/fetch-helper';
import { ApiResponse } from '@/types/api';

export const EventService = {
  getAllEvents: async () => {
    return FetchHelper.get<ApiResponse<IEvent[]>>(
      API_ENDPOINTS.EVENTS,
    );
  },
  createEvent: async (formData: FormData) => {
    return FetchHelper.postFormData<IEvent>(
      API_ENDPOINTS.EVENTS,
      formData,
    );
  },
};
