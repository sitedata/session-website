import { ReactElement, ReactNode } from 'react';
import { Nav, Footer } from '@/components/navigation';
import { EmailSignup } from '@/components/sections';
import { IMetadata } from '@/constants/metadata';
import SeoHead from '@/components/seo/SeoHead';

interface Props {
  title?: string;
  metadata?: IMetadata;
  children: ReactNode;
}

export default function Layout({
  title,
  metadata,
  children,
}: Props): ReactElement {
  return (
    <>
      <SeoHead title={title} metadata={metadata} />
      <Nav />
      <main>{children}</main>
      <EmailSignup />
      <Footer />
    </>
  );
}
