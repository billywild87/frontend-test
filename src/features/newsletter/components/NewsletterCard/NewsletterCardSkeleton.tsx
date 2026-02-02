import { Card, Skeleton } from "@/shared/components/ui";
import { imageContainer, cardContent } from "./newsletterCard.styles";

export function NewsletterCardSkeleton() {
  return (
    <Card>
      <div className={imageContainer}>
        <Skeleton width="100%" height="100%" borderRadius="lg" />
      </div>
      <div className={cardContent}>
        <Skeleton width="100%" height="0.875rem" />
        <Skeleton width="80%" height="0.875rem" />
        <Skeleton width="6rem" height="2rem" borderRadius="md" />
      </div>
    </Card>
  );
}
