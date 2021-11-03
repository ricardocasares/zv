import { css } from "@/css";

export const text = css({
  boxSizing: "border-box",
  fontFamily: "$sans",
  lineHeight: "inherit",
  margin: 0,

  variants: {
    size: {
      1: {
        fontSize: "$1",
        lineHeight: "$1",
      },
      2: {
        fontSize: "$2",
        lineHeight: "$2",
      },
      3: {
        fontSize: "$3",
        lineHeight: "$3",
      },
      4: {
        fontSize: "$4",
        lineHeight: "$4",
      },
      5: {
        fontSize: "$5",
        lineHeight: "$5",
      },
      6: {
        fontSize: "$6",
        lineHeight: "$6",
      },
      7: {
        fontSize: "$7",
        lineHeight: "$7",
      },
      8: {
        fontSize: "$8",
        lineHeight: "$8",
      },
      9: {
        fontSize: "$9",
        lineHeight: "$9",
      },
    },
    weight: {
      bold: {
        fontStyle: "normal",
        fontWeight: "600",
      },
      normal: {
        fontStyle: "normal",
        fontWeight: "400",
      },
      medium: {
        fontStyle: "normal",
        fontWeight: "500",
      },
    },
  },

  defaultVariants: {
    size: 2,
    weight: "medium",
  },
});
