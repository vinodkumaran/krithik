import { useEffect } from 'react';
import { BASE_URL, getRouteByPath, type BreadcrumbItem } from '../routes';

interface SeoOptions {
  path: string;
  title?: string;
  description?: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  additionalSchemas?: object[];
}

function upsertMetaTag(selector: string, attr: string, value: string, createAttrs?: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    if (createAttrs) {
      Object.entries(createAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function upsertLinkTag(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertTitle(title: string) {
  document.title = title;
}

function upsertJsonLd(id: string, schema: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema);
}

function buildBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

function buildWebPageSchema(opts: {
  path: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.title,
    url: `${BASE_URL}${opts.path}`,
    description: opts.description,
    inLanguage: 'en-IN',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Krithik Tours & Travels',
      url: `${BASE_URL}/`,
    },
    publisher: {
      '@type': 'TravelAgency',
      name: 'Krithik Tours & Travels',
      url: `${BASE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/krithik_travels_logo.png`,
      },
    },
    ...(opts.image && {
      image: {
        '@type': 'ImageObject',
        url: opts.image.startsWith('http') ? opts.image : `${BASE_URL}${opts.image}`,
      },
    }),
    breadcrumb: buildBreadcrumbSchema(opts.breadcrumbs),
  };
}

export function useSeo(options: SeoOptions) {
  useEffect(() => {
    const route = getRouteByPath(options.path);
    const title = options.title ?? route?.title ?? 'Krithik Tours & Travels';
    const description = options.description ?? route?.description ?? '';
    const canonicalUrl = `${BASE_URL}${options.path}`;
    const imageUrl = options.image
      ? options.image.startsWith('http')
        ? options.image
        : `${BASE_URL}${options.image}`
      : `${BASE_URL}/krithik_travels_logo.png`;

    upsertTitle(title);
    upsertLinkTag('canonical', canonicalUrl);

    upsertMetaTag('meta[name="description"]', 'content', description);
    upsertMetaTag('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    upsertMetaTag('meta[property="og:title"]', 'content', title);
    upsertMetaTag('meta[property="og:description"]', 'content', description);
    upsertMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    upsertMetaTag('meta[property="og:type"]', 'content', 'website');
    upsertMetaTag('meta[property="og:image"]', 'content', imageUrl);
    upsertMetaTag('meta[property="og:site_name"]', 'content', 'Krithik Tours & Travels');

    upsertMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    upsertMetaTag('meta[name="twitter:title"]', 'content', title);
    upsertMetaTag('meta[name="twitter:description"]', 'content', description);
    upsertMetaTag('meta[name="twitter:image"]', 'content', imageUrl);

    const breadcrumbs = options.breadcrumbs ?? [
      { name: 'Home', path: '/' },
      { name: title, path: options.path },
    ];

    upsertJsonLd('jsonld-breadcrumb', buildBreadcrumbSchema(breadcrumbs));
    upsertJsonLd('jsonld-webpage', buildWebPageSchema({
      path: options.path,
      title,
      description,
      breadcrumbs,
      image: options.image,
    }));

    if (options.additionalSchemas) {
      options.additionalSchemas.forEach((schema, i) => {
        upsertJsonLd(`jsonld-extra-${i}`, schema);
      });
    }
  }, [options.path, options.title, options.description, options.image, options.breadcrumbs, options.additionalSchemas]);
}
