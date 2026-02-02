import { cva } from "@/styled-system/css";

export const button = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    px: "button.x",
    py: "button.y",
    fontWeight: "bold",
    borderRadius: "3xl",
    cursor: "pointer",
    transition: "all 0.2s",
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      primary: {
        bg: "cta.primary",
        color: "white",
        _hover: {
          opacity: 0.9,
        },
      },
      secondary: {
        bg: "cta.secondary",
        color: "gray.900",
        _hover: {
          opacity: 0.9,
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
