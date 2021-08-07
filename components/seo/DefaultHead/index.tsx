import { ReactElement } from 'react';
import { DefaultSeo } from 'next-seo';
import METADATA from '@/constants/metadata';

export default function DefaultHead(): ReactElement {
  return (
    <DefaultSeo
      title={METADATA.TITLE}
      description={METADATA.DESCRIPTION}
      canonical={METADATA.HOST_URL}
      openGraph={{
        url: METADATA.HOST_URL,
        title: METADATA.TITLE,
        type: METADATA.OG_TYPE,
        description: METADATA.DESCRIPTION,
        images: [
          {
            url: `${METADATA.HOST_URL}${METADATA.OG_IMAGE.URL}`,
            width: METADATA.OG_IMAGE.WIDTH,
            height: METADATA.OG_IMAGE.HEIGHT,
            alt: METADATA.OG_IMAGE.ALT,
          },
        ],
        locale: METADATA.LOCALE,
        site_name: METADATA.SITE_NAME,
      }}
      twitter={{
        handle: 'session_app',
        site: METADATA.HOST_URL,
        cardType: 'summary_large_image',
      }}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: 'large',
        maxVideoPreview: -1,
      }}
      additionalMetaTags={[
        {
          property: 'viewport',
          content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
        },
        {
          property: 'apple-itunes-app',
          content: 'app-id=1470168868',
        },
        {
          property: 'msapplication-TileColor',
          content: METADATA.MSAPPLICATION_TILECOLOR,
        },
        {
          property: 'theme-color',
          content: METADATA.THEME_COLOR,
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          type: 'type="image/png',
          sizes: '32x32',
          href: METADATA.FAVICON.MEDIUM,
        },
        {
          rel: 'icon',
          type: 'type="image/png',
          sizes: '16x16',
          href: METADATA.FAVICON.SMALL,
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: METADATA.FAVICON.APPLE_TOUCH_ICON,
        },
        {
          rel: 'manifest',
          href: METADATA.MANIFEST,
        },
        {
          rel: 'mask-icon',
          href: METADATA.MASK_ICON.PATH,
          color: METADATA.MASK_ICON.COLOR,
        },
        {
          rel: 'shortlink',
          href: METADATA.HOST_URL,
        },
        {
          rel: 'alternative',
          type: 'application/rss+xml',
          href: '/feed',
        },
        {
          rel: 'alternative',
          type: 'application/atom+xml',
          href: '/feed/atom',
        },
        {
          rel: 'alternative',
          type: 'application/feed+json',
          href: '/feed/json',
        },
      ]}
    />
  );
}
