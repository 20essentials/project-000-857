const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);

const $row1 = $('.row1');
const $row2 = $('.row2');
const $template = $('.myTemplate').content;

const iconsRow = [
  './icons/campofrio.webp',
  './icons/asus.webp',
  './icons/heineken.webp',
  './icons/google-pixel.webp',
  './icons/volkswagen.webp',
  './icons/universal.webp',
  './icons/takis.webp',
  './icons/spotify.webp',
  './icons/mediamarkt.webp',
  './icons/maggi.webp',
  './icons/mcdonalds.webp',
  './icons/pccomp.webp',
  './icons/dia.webp',
  './icons/oysho.webp',
  './icons/milanuncios.webp',
  './icons/nike.webp',
  './icons/elpozo.webp',
  './icons/infojobs.webp',
  './icons/adidas.webp',
  './icons/central-lechera.webp',
  './icons/logitech.webp',
  './icons/samsung.webp',
  './icons/riot.webp'
];

function addIcons() {
  const fragment1 = document.createDocumentFragment();
  const fragment2 = document.createDocumentFragment();

  iconsRow.forEach(src => {
    $template.querySelector("img").src = src;
    const clone1 = $template.cloneNode(true);
    const clone2 = $template.cloneNode(true);
    fragment1.appendChild(clone1);
    fragment2.appendChild(clone2);
  });

  $row1.appendChild(fragment1);
  // $row2.appendChild(fragment2);
}


addIcons();
