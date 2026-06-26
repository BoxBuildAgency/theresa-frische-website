// Tiny className joiner — avoids an extra dependency.
export type ClassValue = string | number | null | false | undefined;

export function clsx(...args: ClassValue[]): string {
  return args.filter(Boolean).join(" ");
}
