import { css } from "@/styled-system/css";

export const imageContainer = css({
  position: "relative",
  aspectRatio: "3/2",
  overflow: "hidden",
  bg: "surface.placeholder",
});

export const image = css({
  objectFit: "cover",
});

export const titleOverlay = css({
  position: "absolute",
  inset: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  p: "4",
  background:
    "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.1) 100%)",
});

export const titleText = css({
  fontFamily: "editorial",
  color: "white",
  fontWeight: "bold",
  fontSize: "2xl",
});

export const cardContent = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3",
  p: "3",
});

export const description = css({
  fontSize: "sm",
  lineHeight: "1.5",
});
