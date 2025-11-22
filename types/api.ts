export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

export type IParams = {
  params: Promise<{ slug: string }>;
};
