import { globalCss } from "@/css";

export const globalStyles = globalCss({
  body: {
    backgroundColor: "$black",
    color: "$white",
    fontFamily: "$sans",
    margin: 0,
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
