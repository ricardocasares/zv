import { theme, styled } from '@/css';

export const Grid = styled('div', {
  display: "grid",
  gridGap: "$3",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))"
});