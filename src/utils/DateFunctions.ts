import { Timestamp } from "@firebase/firestore-types";

export function calculateSinceTime(datePosted: Timestamp): string {
  const diffInMilliseconds = +new Date() - datePosted.toMillis();

  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  if (diffInDays > 0) return `منذ ${diffInDays} ايام`;

  const diffInHours = Math.floor((diffInMilliseconds / (1000 * 60 * 60)) % 24);
  if (diffInHours > 0) return `منذ ${diffInHours} ساعات`;

  const diffInMinutes = Math.floor((diffInMilliseconds / (1000 * 60)) % 60);
  return `منذ ${diffInMinutes} دقائق`;
}
