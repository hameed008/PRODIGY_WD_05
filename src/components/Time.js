const date = new Date();
export let hours = date.getHours();
hours = hours > 12 ? hours - 12 : hours;
export let minutes = date.getMinutes().toString().padStart(2, "0");
