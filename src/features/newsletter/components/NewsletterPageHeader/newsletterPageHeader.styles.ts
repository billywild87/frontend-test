import { css } from "@/styled-system/css";

export const container = css({
  p: "6",
  bg: "surface.muted",
  borderRadius: "lg",
  mb: "8",
});

export const title = css({
  fontSize: "3xl",
  fontWeight: "bold",
  mb: "3",
  textAlign:"center",
  textTransform: "uppercase",
  letterSpacing: "wide",
  fontFamily:"body"
});

export const description = css({
  fontSize: "md",
  color: "gray.600",
  lineHeight: "1.6",
  textAlign:"center"
});
