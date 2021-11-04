import { styled } from "@/css";

export const Text = styled("h1", {
  boxSizing: "border-box",
  fontFamily: "$sans",
  lineHeight: "inherit",
  margin: 0,

  variants: {
    kind: {
      p: {
        fontSize: "$3",
        lineHeight: "$2",
        fontWeight: 400,
        color: "$copy"
      },
      h1: {
        fontSize: "$6",
        lineHeight: "$5",
        fontWeight: 500
      },
      h2: {
        fontSize: "$5",
        lineHeight: "$4",
        fontWeight: 500,
        color: "$accent",
      },
      h3: {
        fontSize: "$4",
        lineHeight: "$3",
        fontWeight: 500,
        color: "$gray"
      },
    },
    family: {
      sans: {
        fontFamily: "$sans"
      },
      mono: {
        fontFamily: "$mono"
      }
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
    kind: "p",
  },
});
