import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export interface Venue {
  id: number;
  name: string;
  description: string;
  location: string;
  logo_url: string
  slug: string;
}