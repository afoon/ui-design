import { defineTextStyles } from "@pandacss/dev";

export const typography = {
  fonts: {
    spline: { value: "var(--font-spline-sans)" },
    inter: { value: "var(--font-inter-sans)" },
  },
  fontSizes: {
    xs: { value: "0.75rem" },
    sm: { value: "0.875rem" },
    md: { value: "1rem" },
    lg: { value: "1.25rem" },
    xl: { value: "1.5rem" },
  },
  fontWeights: {
    thin: { value: 300 },
    medium: { value: 500 },
    semibold: { value: 600 },
    bold: { value: 700 },
  },
};
export const textStyles = defineTextStyles({
  body: {
    value: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      textDecoration: "none",
      textTransform: "none",
    },
  },
  heading: { value: { fontFamily: "Spline Sans, sans-serif" } },
});
