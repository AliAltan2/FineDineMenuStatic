export default function itemImageLoader({ src, width, quality }) {
  return `https://media.finedinemenu.com/?${src}?w${width}?q=${quality}`;
}
