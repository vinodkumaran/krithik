const BASE_URL = 'https://www.krithiktravels.com';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function injectPageSchema(schemas: object[]): () => void {
  const tags: HTMLScriptElement[] = schemas.map(schema => {
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.text = JSON.stringify(schema);
    tag.setAttribute('data-dynamic-schema', 'true');
    document.head.appendChild(tag);
    return tag;
  });

  return () => {
    tags.forEach(tag => tag.parentNode?.removeChild(tag));
  };
}

export function buildBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
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

export function buildWebPageSchema(opts: {
  name: string;
  url: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  imageUrl?: string;
  inLanguage?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.name,
    url: `${BASE_URL}${opts.url}`,
    description: opts.description,
    inLanguage: opts.inLanguage ?? 'en-IN',
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
    ...(opts.imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: `${BASE_URL}${opts.imageUrl}`,
      },
    }),
    breadcrumb: buildBreadcrumbSchema(opts.breadcrumbs),
  };
}
