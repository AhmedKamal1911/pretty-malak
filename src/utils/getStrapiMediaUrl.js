function getStrapiURL() {
  return "http://localhost:1337";
}

export function getStrapiMediaURL(url) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}
