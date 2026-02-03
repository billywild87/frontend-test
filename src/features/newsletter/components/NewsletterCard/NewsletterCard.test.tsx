import { render, screen } from "@testing-library/react";
import { NewsletterCard } from "./NewsletterCard";
import { NEWSLETTER_COLLECTION } from "../../fixtures";

const newsletter = NEWSLETTER_COLLECTION[0];

describe("NewsletterCard", () => {
  describe("rendering", () => {
    it("should render the newsletter title", () => {
      render(<NewsletterCard newsletter={newsletter} hasAccess={false} />);

      expect(screen.getByText(newsletter.title)).toBeInTheDocument();
    });

    it("should render the newsletter description", () => {
      render(<NewsletterCard newsletter={newsletter} hasAccess={false} />);

      expect(screen.getByText(newsletter.description)).toBeInTheDocument();
    });

    it("should render the newsletter image with correct alt text", () => {
      render(<NewsletterCard newsletter={newsletter} hasAccess={false} />);

      const image = screen.getByRole("img", { name: newsletter.title });
      expect(image).toBeInTheDocument();
    });
  });

  describe("access states", () => {
    it("should show 'S'abonner' button when user has no access", () => {
      render(<NewsletterCard newsletter={newsletter} hasAccess={false} />);

      expect(
        screen.getByRole("button", { name: "S'abonner" })
      ).toBeInTheDocument();
    });

    it("should show 'S'inscrire' button when user has access", () => {
      render(<NewsletterCard newsletter={newsletter} hasAccess={true} />);

      expect(
        screen.getByRole("button", { name: "S'inscrire" })
      ).toBeInTheDocument();
    });
  });
});
