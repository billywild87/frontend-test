import { css } from "@/styled-system/css";

export const container = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "6",
  minH: "60vh",
  textAlign: "center",
  px: "4",
});

export const errorCode = css({
  fontSize: "8xl",
  fontWeight: "bold",
  color: "gray.600",
  lineHeight: "1",
});

export const title = css({
  fontSize: "2xl",
  fontWeight: "semibold",
  color: "gray.200",
});

export const description = css({
  fontSize: "md",
  color: "gray.400",
  maxW: "md",
});
