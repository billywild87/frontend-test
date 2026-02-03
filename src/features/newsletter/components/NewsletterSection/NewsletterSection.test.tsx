import { SITE, SUBSCRIPTION_RIGHT } from "@/shared/types";
import { render, screen } from "@testing-library/react";
import { NEWSLETTER_COLLECTION } from "../../fixtures";
import { NewsletterSection } from "./NewsletterSection";

const denNewsletters = NEWSLETTER_COLLECTION.filter((n) => n.site === SITE.DEN);

describe("NewsletterSection", () => {
  describe("rendering", () => {
    it("should render the site name as title", () => {
      render(
        <NewsletterSection
          site={SITE.DEN}
          items={denNewsletters}
          userSubscriptions={[]}
        />
      );

      expect(
        screen.getByRole("heading", { name: SITE.DEN })
      ).toBeInTheDocument();
    });

    it("should render all newsletter cards", () => {
      render(
        <NewsletterSection
          site={SITE.DEN}
          items={denNewsletters}
          userSubscriptions={[]}
        />
      );

      denNewsletters.forEach((newsletter) => {
        expect(screen.getByText(newsletter.title)).toBeInTheDocument();
      });
    });

    it("should render nothing when items array is empty", () => {
      const { container } = render(
        <NewsletterSection site={SITE.DEN} items={[]} userSubscriptions={[]} />
      );

      expect(container).toBeEmptyDOMElement();
    });
  });

  describe("access logic", () => {
    it("should show 'S'inscrire' for newsletters user has access to", () => {
      render(
        <NewsletterSection
          site={SITE.DEN}
          items={denNewsletters}
          userSubscriptions={[SUBSCRIPTION_RIGHT.RIGHT_1]}
        />
      );

      const subscribeButtons = screen.getAllByRole("button", {
        name: "S'abonner",
      });
      const registerButtons = screen.getAllByRole("button", {
        name: "S'inscrire",
      });

      const expectedRegister = denNewsletters.filter(
        (n) =>
          n.subscriptions.length === 0 ||
          n.subscriptions.includes(SUBSCRIPTION_RIGHT.RIGHT_1)
      ).length;

      expect(registerButtons).toHaveLength(expectedRegister);
      expect(subscribeButtons).toHaveLength(
        denNewsletters.length - expectedRegister
      );
    });

    it("should show 'S'inscrire' for newsletters with no subscription requirement", () => {
      render(
        <NewsletterSection
          site={SITE.DEN}
          items={denNewsletters}
          userSubscriptions={[]}
        />
      );

      const registerButtons = screen.getAllByRole("button", {
        name: "S'inscrire",
      });

      const freeNewsletters = denNewsletters.filter(
        (n) => n.subscriptions.length === 0
      ).length;

      expect(registerButtons).toHaveLength(freeNewsletters);
    });

    it("should show all 'S'inscrire' when user has all subscriptions", () => {
      render(
        <NewsletterSection
          site={SITE.DEN}
          items={denNewsletters}
          userSubscriptions={[
            SUBSCRIPTION_RIGHT.RIGHT_1,
            SUBSCRIPTION_RIGHT.RIGHT_2,
          ]}
        />
      );

      const registerButtons = screen.getAllByRole("button", {
        name: "S'inscrire",
      });

      expect(registerButtons).toHaveLength(denNewsletters.length);
    });
  });
});
