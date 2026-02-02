import {
  ImageUrl,
  NewsletterId,
  Site,
  SubscriptionRight,
} from "@/shared/types";

export interface Newsletter {
  id: NewsletterId;
  image: ImageUrl;
  title: string;
  description: string;
  site: Site;
  subscriptions: SubscriptionRight[];
}
