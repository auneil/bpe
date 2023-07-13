/**
 * Name: slugify
 *
 * Description: Replaces white spaces and special chars with hyphens
 *
 * @param {string} str String to be converted into slug format
 * @returns {string} this-is-typically-used-for-urls-or-css-classes
 */

export function slugify(str) {
  if (typeof str === "string" || str instanceof String)
    return (
      str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "") || "untitled"
    );
}

export function sortByDate(datesArray) {
  const newDates = datesArray.sort(function compare(a, b) {
    const dateA = new Date(a?.date);
    const dateB = new Date(b?.date);
    return dateB - dateA;
  });

  return newDates;
}
