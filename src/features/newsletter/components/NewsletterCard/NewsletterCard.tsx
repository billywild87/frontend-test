import { Button, Card, FallbackImage } from "@/shared/components/ui";
import { fr } from "@/shared/i18n";
import { Newsletter } from "../../types";
import {
  imageContainer,
  image,
  titleOverlay,
  titleText,
  cardContent,
  description,
} from "./newsletterCard.styles";

type NewsletterCardProps = {
  newsletter: Newsletter;
  hasAccess: boolean;
};

export function NewsletterCard({ newsletter, hasAccess }: NewsletterCardProps) {
  return (
    <Card>
      <div className={imageContainer}>
        <FallbackImage
          src={newsletter.image}
          alt={newsletter.title}
          fill
          className={image}
        />
        <div className={titleOverlay}>
          <span className={titleText}>{newsletter.title}</span>
        </div>
      </div>
      <div className={cardContent}>
        <p className={description}>{newsletter.description}</p>
        <Button variant={hasAccess ? "primary" : "secondary"}>
          {hasAccess ? fr.newsletter.cta.register : fr.newsletter.cta.subscribe}
        </Button>
      </div>
    </Card>
  );
}
