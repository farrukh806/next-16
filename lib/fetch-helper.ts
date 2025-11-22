export class FetchHelper {
  static async get<T>(
    endpoint: string,
    queryParams: Record<string, string> = {},
  ): Promise<T> {
    const url = new URL(endpoint, process.env.API_BASE_URL);
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`GET request failed: ${response.statusText}`);
    }
    return response.json();
  }

  static async post<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`POST request failed: ${response.statusText}`);
    }
    return response.json();
  }

  static async postFormData<T>(
    endpoint: string,
    formData: FormData,
  ): Promise<T> {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`POST request failed: ${response.statusText}`);
    }
    return response.json();
  }
}
