import { globalCss } from "@/css";

export const globalStyles = globalCss({
  "#__next, html": {
    minHeight: "100%",
    height: "100%",
  },
  body: {
    backgroundColor: "$bg",
    color: "$fg",
    fontFamily: "$sans",
    fontSize: "$3",
    lineHeight: "$2",
    margin: 0,
    padding: 0,
    minHeight: "100%",
    height: "100%",
  },

  ul: {
    paddingLeft: "$4",
  },

  figure: { margin: 0 },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  svg: { display: "inline-block", verticalAlign: "middle" },

  "::selection": {
    backgroundColor: "hsla(52, 100%, 49%, 0.99)",
    color: "$black",
  },
});
