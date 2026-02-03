import { NewsletterSectionSkeleton } from "@/features/newsletter/components/NewsletterSection/NewsletterSectionSkeleton";

export default function Loading() {
  return (
    <>
      <NewsletterSectionSkeleton cardCount={4} />
      <NewsletterSectionSkeleton cardCount={3} />
    </>
  );
}
