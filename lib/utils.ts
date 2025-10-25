import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with proper precedence.
 *
 * Combines clsx for conditional classes and tailwind-merge to handle
 * conflicting Tailwind classes by keeping only the last one.
 *
 * @param inputs - Class values to merge (strings, objects, arrays, etc.)
 * @returns Merged class string
 *
 * @example
 * ```tsx
 * cn('px-2 py-1', condition && 'bg-red-500', 'px-4')
 * // Returns: 'py-1 bg-red-500 px-4' (px-4 overrides px-2)
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
