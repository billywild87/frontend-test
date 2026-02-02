import { css } from "@/styled-system/css";

export const container = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "3",
  py: "16",
  textAlign: "center",
});

export const title = css({
  fontSize: "lg",
  fontWeight: "semibold",
  color: "gray.300",
});

export const description = css({
  fontSize: "md",
  color: "gray.500",
  maxW: "md",
});
