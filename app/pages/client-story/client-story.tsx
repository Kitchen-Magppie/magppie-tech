import { MobileLayout } from '~/components';
import {Content, Hero } from './components';

export default function ClientStory() {
  return (
    <MobileLayout>
      <Hero />
      <Content />
    </MobileLayout>
  );
}