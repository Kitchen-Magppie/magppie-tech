import { MobileLayout } from '~/components';
import { ClientStoryContent, ClientStoryHero } from './components';

export default function ClientStory() {
  return (
    <MobileLayout>
      <ClientStoryHero />
      <ClientStoryContent />
    </MobileLayout>
  );
}
