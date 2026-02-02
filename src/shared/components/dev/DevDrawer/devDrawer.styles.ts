import { css } from "@/styled-system/css";

export const drawer = css({
  position: "fixed",
  bottom: "4",
  right: "4",
  zIndex: 9999,
  minWidth: "320px",
  maxWidth: "400px",
  bg: "gray.900",
  border: "1px solid",
  borderColor: "gray.700",
  borderRadius: "lg",
  boxShadow: "xl",
  overflow: "hidden",
});

export const header = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  p: "3",
  bg: "gray.800",
  cursor: "pointer",
  userSelect: "none",
  _hover: {
    bg: "gray.750",
  },
});

export const headerTitle = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
  fontSize: "sm",
  fontWeight: "semibold",
  color: "white",
});

export const headerToggle = css({
  fontSize: "lg",
  color: "gray.400",
  transition: "transform 0.2s",
});

export const content = css({
  p: "4",
  display: "flex",
  flexDirection: "column",
  gap: "4",
  maxHeight: "60vh",
  overflowY: "auto",
});

export const section = css({
  display: "flex",
  flexDirection: "column",
  gap: "2",
});

export const sectionTitle = css({
  fontSize: "xs",
  fontWeight: "semibold",
  color: "gray.400",
  textTransform: "uppercase",
  letterSpacing: "wider",
});

export const buttonGroup = css({
  display: "flex",
  gap: "2",
  flexWrap: "wrap",
});

export const button = css({
  px: "3",
  py: "1.5",
  fontSize: "xs",
  borderRadius: "md",
  cursor: "pointer",
  transition: "all 0.2s",
  border: "1px solid",
  borderColor: "gray.600",
  bg: "transparent",
  color: "gray.300",
  _hover: {
    borderColor: "blue.500",
    color: "blue.400",
  },
});

export const buttonActive = css({
  bg: "blue.600",
  borderColor: "blue.600",
  color: "white",
  _hover: {
    bg: "blue.700",
    borderColor: "blue.700",
  },
});
