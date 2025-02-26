import type { MetaFunction } from '@remix-run/node';
// =========================================================

// =========================================================
import FooterLinks from '~/pages/footer-links';

export default function FormPage() {
  return <FooterLinks />;
}

export const meta: MetaFunction = () => {
  return [
    { title: 'MAGPPIE' },
    { name: 'description', content: 'Welcome to MAGPPIE!' },
  ];
};
