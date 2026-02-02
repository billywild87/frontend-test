import { css, cx } from "@/styled-system/css";
import { skeleton } from "./skeleton.styles";

type SkeletonProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
};

export function Skeleton({
  width = "100%",
  height = "1rem",
  className,
}: SkeletonProps) {
  const style = css({
    width,
    height,
  });

  return <div className={cx(skeleton, style, className)} />;
}
