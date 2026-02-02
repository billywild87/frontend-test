import { css } from "@/styled-system/css";

export const section = css({
  display: "grid",
  gap: "3",
  mb: "6",
});

export const header = css({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: "3",
});

export const title = css({
  fontSize: "lg",
  fontWeight: "semibold",
  position: "relative",
  _after: {
    content: '""',
    display: "block",
    height: "4px",
    width: "50px",
    bg: "brand.primary",
    mt: "2",
  },
});

export const count = css({
  fontSize: "sm",
  color: "gray.400",
});

export const grid = css({
  display: "grid",
  gap: "8",
  gridTemplateColumns: "1fr",
  md: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  lg: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});