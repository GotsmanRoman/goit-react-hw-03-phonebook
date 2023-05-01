export const setRandomColor = () => {
  const r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  return `${r}, ${g}, ${b}`;
};
