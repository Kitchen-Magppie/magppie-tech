import ProductCategoriesOne from '~/assets/videos/product-categories1.mp4';
import ProductCategoriesTwo from '~/assets/videos/product-categories-2.mp4';
import { TCategoryItem } from '~/types';

export const CATEGORY_MOCK_DATA: TCategoryItem[] = [
  {
    id: 1,
    title: 'Wellness Kitchens',
    subTitle: 'Benefits of Wellness Kitchen',
    videoUrl: ProductCategoriesOne,
    desc: 'Harmful formaldehyde emissions from kitchens and furniture are putting our cellular health at risk...',
  },
  {
    id: 2,
    title: 'Wellness Wardrobes',
    subTitle: 'Benefits of Wellness Wardrobes',
    videoUrl: ProductCategoriesTwo,
    desc: 'Harmful formaldehyde emissions from kitchens and furniture are putting our cellular health at risk...',
  },
];
