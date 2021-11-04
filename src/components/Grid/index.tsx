import { styled } from '@/css';

export const Grid = styled('div', {
  display: "grid",
  gridGap: "$4",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
});