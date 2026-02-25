/**
 * Utility function to conditionally join CSS class names.
 * Filters out falsy values (undefined, null, false, empty strings).
 */
export const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");
