export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  return '#'+ (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
};