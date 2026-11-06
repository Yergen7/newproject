function getLocalTime(date: Date = new Date()): string {
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(`Local time: ${getLocalTime()} (${timeZone})`);
