import ProductCategoriesOne from '~/assets/videos/product-categories1.mp4';
import ProductCategoriesTwo from '~/assets/videos/product-categories-2.mp4';
import onGoing from '~/assets/videos/on-going.mp4';
import { TCategoryItem, TOnGoingItem } from '~/types';
import chat from '~/assets/images/chat.svg';
import call from '~/assets/images/call.svg';
import save from '~/assets/images/save.svg';
import share from '~/assets/images/share.svg';

export const CATEGORY_MOCK_DATA: TCategoryItem[] = [
  {
    id: 1,
    title: 'Wellness Kitchens',
    subTitle: 'benefits of Wellness Kitchen',
    videoUrl: ProductCategoriesOne,
    desc: 'Harmful formaldehyde emissions from kitchens and furniture are putting our cellular health at risk...',
  },
  {
    id: 2,
    title: 'Wellness Wardrobes',
    subTitle: 'benefits of Wellness Wardrobes',
    videoUrl: ProductCategoriesTwo,
    desc: 'Harmful formaldehyde emissions from kitchens and furniture are putting our cellular health at risk...',
  },
];

export const CARD_ACTION_OPTIONS = [
  // { value: 'circum:chat-2', label: 'chat' },
  // { value: 'hugeicons:call-02', label: 'call us' },
  // { value: 'bitcoin-icons:share-filled', label: 'share' },
  // { value: 'material-symbols:bookmark-outline-rounded', label: 'save' },
  { value: chat, label: 'chat' },
  { value: call, label: 'call us' },
  { value: share, label: 'share' },
  { value: save, label: 'save' },
];

export const ONGOING_MOCK_DAtA: TOnGoingItem[] = [
  {
    id: 1,
    title: 'Wellness Kitchens',
    subTitle: 'Fiona Wellness Kitchen',
    videoUrl: onGoing,
    desc: 'Magppie wellness kitchen being set up in Dubai, expected to be handed-over in January 2025',
  },
];
