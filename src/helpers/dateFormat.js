export const dateFormat = (date) => {
  return Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    mminute: "2-digit",
  }).format(date);
};
