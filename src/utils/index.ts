export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

export const compare = (a: number, b: number) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

export const comparesDates = (a: string, b: string) => {
  // b - a, since I want descending
  return +new Date(b) - +new Date(a);
};
