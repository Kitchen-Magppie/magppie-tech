import type { MetaFunction } from '@remix-run/node';
// =========================================================

// =========================================================

import ClientStory from '~/pages/client-story';

export default function ClientStoryPage() {
  return <ClientStory />;
}

export const meta: MetaFunction = () => {
  return [
    { title: 'MAGPPIE' },
    { name: 'description', content: 'Welcome to MAGPPIE!' },
  ];
};
