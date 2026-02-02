import { css } from "@/styled-system/css";

export const skeleton = css({
  bg: "gray.700",
  borderRadius: "md",
  backgroundImage:
    "linear-gradient(90deg, token(colors.gray.700) 0%, token(colors.gray.600) 50%, token(colors.gray.700) 100%)",
  backgroundSize: "200% 100%",
});
