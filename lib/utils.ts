import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatImageUrl(
  url: string,
  config: { width: number; height: number },
) {
  // get the last part of the url after the last '/'
  const parts = url.split('/');
  const imageName = parts[parts.length - 1];
  // decode the image name
  const decodedImageName = decodeURIComponent(imageName);
  // return cloudinary url with decoded image name
  return `https://res.cloudinary.com/dxztq9ukl/image/upload/c_auto,h_${config.height},w_${config.width}/f_auto/dev-event/${decodedImageName}`;
}
