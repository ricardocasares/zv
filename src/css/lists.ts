import { css } from "@/css";

export const list = css({
  margin: 0,
  variants: {
    unstyled: {
      true: {
        padding: 0,
        listStyle: "none",
      },
    },
    horizontal: {
      true: {
        li: {
          display: "inline-block",
        },
      },
    },
  },
  defaultVariants: {
    unstyled: true,
  },
});
