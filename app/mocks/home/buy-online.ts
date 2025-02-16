import novaOne from '~/assets/images/buy-online/nova-one.png';
import { _, TBuyOnlineItem } from '~/types';

export const BUY_ONLINE_MOCK_DATA: TBuyOnlineItem[] = [
  {
    id: 1,
    amount: '$15000 onwards',
    heading: 'wellness kitchen',
    title: 'nova wellness kitchen',
    images: _.times(5, () => novaOne),
    desc: 'Balinese-inspired outdoor kitchen designs featuring Silverstone body and countertops...',
  },
  {
    id: 2,
    amount: '$12000 onwards',
    heading: 'wellness wardrobe',
    title: 'bella rosé wellness wardrobe',
    images: _.times(5, () => novaOne),
    desc: 'Balinese-inspired outdoor kitchen designs featuring Silverstone body and countertops...',
  },
];
