import type { VariantProps } from "@stitches/react";
//
import { theme, styled } from "@/css";

export type Stack = VariantProps<typeof Stack>;
export const Stack = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  minHeight: "100%",

  "> *": {
    marginTop: "0",
    marginBottom: "0",
  },

  "> * + *": {
    marginTop: theme.space[2],
  },

  variants: {
    pad: {
      1: {
        padding: theme.space[2],
      },
      2: {
        padding: theme.space[3],
      },
      3: {
        padding: theme.space[4],
      },
      4: {
        padding: theme.space[5],
      },
    },
    gap: {
      1: {
        "> * + *": {
          marginTop: theme.space[2],
        },
      },
      2: {
        "> * + *": {
          marginTop: theme.space[3],
        },
      },
      3: {
        "> * + *": {
          marginTop: theme.space[4],
        },
      },
      4: {
        "> * + *": {
          marginTop: theme.space[5],
        },
      },
    },

    full: {
      true: {
        flex: 1,
      },
    },

    debug: {
      true: {
        border: "1px solid red",
        borderRadius: theme.radii[1],
        "> *": {
          borderRadius: theme.radii[1],
          border: "1px solid red",
        },
      },
    },
  },
});
