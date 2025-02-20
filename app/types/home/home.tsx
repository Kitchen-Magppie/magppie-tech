export type TBuyOnlineItem = {
  id: number;
  amount: string;
  heading: string;
  title: string;
  images: string[];
  desc: string;
  more?: string;
};

export type TCategoryItem = {
  id: number;
  title: string;
  subTitle: string;
  videoUrl: string;
  desc: string;
};

export type TOnGoingItem = {
  id: number;
  title: string;
  subTitle: string;
  videoUrl: string;
  desc: string;
};