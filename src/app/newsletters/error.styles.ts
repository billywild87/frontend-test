import { css } from "@/styled-system/css";

export const container = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "4",
  py: "16",
  textAlign: "center",
});

export const title = css({
  fontSize: "xl",
  fontWeight: "semibold",
  color: "red.400",
});

export const description = css({
  fontSize: "md",
  color: "gray.400",
  maxW: "md",
});
