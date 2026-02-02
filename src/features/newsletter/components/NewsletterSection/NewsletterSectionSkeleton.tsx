import { Skeleton } from "@/shared/components/ui";
import { NewsletterCardSkeleton } from "../NewsletterCard/NewsletterCardSkeleton";
import { section, header, grid } from "./newsletterSection.styles";

type Props = {
  cardCount?: number;
};

export function NewsletterSectionSkeleton({ cardCount = 3 }: Props) {
  return (
    <section className={section}>
      <header className={header}>
        <Skeleton width="8rem" height="1.5rem" />
        <Skeleton width="1.5rem" height="1rem" />
      </header>

      <div className={grid}>
        {Array.from({ length: cardCount }).map((_, i) => (
          <NewsletterCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
