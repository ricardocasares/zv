import { styled } from "@/css";

export const Text = styled("p", {
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
        fontWeight: 400,
        color: "$gray"
      },
      h4: {
        fontSize: "$3",
        lineHeight: "$2",
        fontWeight: 500,
        color: "$accent"
      },
      h5: {
        fontSize: "$2",
        lineHeight: "$1",
        fontWeight: 500,
        color: "$gray",
        textTransform: "uppercase",
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
      thin: {
        fontStyle: "normal",
        fontWeight: "300",
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
