import { ReactElement, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { Nav, Footer } from '@/components/navigation';
import { EmailSignup } from '@/components/sections';
import METADATA, { IMetadata } from '@/constants/metadata';

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
  const router = useRouter();
  const pageUrl = `${METADATA.HOST_URL}${router.asPath}`;
  return (
    <>
      <NextSeo
        title={
          title && title.length > 0 ? `${title} - Session` : METADATA.TITLE
        }
        description={metadata?.DESCRIPTION ?? METADATA.DESCRIPTION}
        canonical={pageUrl}
        openGraph={{
          type: metadata?.TYPE ?? METADATA.OG_TYPE,
          url: pageUrl,
          description: metadata?.DESCRIPTION ?? METADATA.DESCRIPTION,
          images: [
            {
              url: `${METADATA.HOST_URL}${
                metadata?.OG_IMAGE?.URL ?? METADATA.OG_IMAGE.URL
              }`,
              width: metadata?.OG_IMAGE?.WIDTH ?? METADATA.OG_IMAGE.WIDTH,
              height: metadata?.OG_IMAGE?.HEIGHT ?? METADATA.OG_IMAGE.HEIGHT,
              alt: metadata?.OG_IMAGE?.ALT ?? METADATA.OG_IMAGE.ALT,
            },
          ],
          article: (() => {
            if (metadata?.TYPE !== 'article') return {};
            return {
              section: metadata?.ARTICLE_SECTION ?? METADATA.TAGS[0],
              tags: metadata?.TAGS ?? METADATA.TAGS,
              publishedTime: metadata?.PUBLISHED_TIME,
            };
          })(),
        }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: metadata?.TAGS?.join(' ') ?? METADATA.TAGS.join(' '),
          },
        ]}
      />
      <Nav />
      <main>{children}</main>
      <EmailSignup />
      <Footer />
    </>
  );
}
