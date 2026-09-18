// Prefixes root-relative paths with the configured `base`, so the site works both at a domain root
// and under a sub-path such as a GitHub Pages project site (/product-marketing-consultant/).
const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL.slice(0, -1) : import.meta.env.BASE_URL;

/** Site-relative link, e.g. href('/about/') -> '/product-marketing-consultant/about/' on GitHub Pages. */
export function href(path: string): string {
  return path.startsWith('/') ? `${base}${path}` : path;
}

/** Absolute URL for canonical tags, structured data and feeds. */
export function abs(path: string, site: URL | undefined): string {
  return new URL(href(path), site).href;
}
