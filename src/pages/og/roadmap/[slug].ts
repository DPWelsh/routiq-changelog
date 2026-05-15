import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const entries = await getCollection('roadmap');
const pages = Object.fromEntries(entries.map(({ id, data }) => [id, data]));

const RGB = {
  cream: [245, 240, 235] as [number, number, number],
  creamDim: [237, 230, 221] as [number, number, number],
  stone: [217, 208, 194] as [number, number, number],
  blackberry: [26, 28, 18] as [number, number, number],
  blackberrySoft: [110, 101, 87] as [number, number, number],
  clay: [201, 139, 122] as [number, number, number],
  clayDeep: [168, 107, 90] as [number, number, number],
};

const STATUS_LABEL: Record<string, string> = {
  now: 'In progress',
  next: 'On deck',
  later: 'Planned',
  shipped: 'Shipped',
};

const STATUS_BG: Record<string, [number, number, number]> = {
  now: RGB.cream,
  next: RGB.creamDim,
  later: RGB.stone,
  shipped: RGB.blackberry,
};

const STATUS_ACCENT: Record<string, [number, number, number]> = {
  now: RGB.clay,
  next: RGB.clayDeep,
  later: RGB.blackberry,
  shipped: RGB.clay,
};

const STATUS_TEXT: Record<string, [number, number, number]> = {
  now: RGB.blackberry,
  next: RGB.blackberry,
  later: RGB.blackberry,
  shipped: RGB.cream,
};

const STATUS_DESC: Record<string, [number, number, number]> = {
  now: RGB.blackberrySoft,
  next: RGB.blackberrySoft,
  later: RGB.blackberrySoft,
  shipped: [156, 148, 133],
};

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'slug',
  pages,
  getImageOptions: (_path: string, page: any) => ({
    title: page.title,
    description: `routiq.  /  roadmap  ·  ${STATUS_LABEL[page.status] ?? page.status}`,
    bgGradient: [STATUS_BG[page.status] ?? RGB.cream],
    border: { color: STATUS_ACCENT[page.status] ?? RGB.clay, width: 10, side: 'inline-start' },
    padding: 80,
    font: {
      title: {
        color: STATUS_TEXT[page.status] ?? RGB.blackberry,
        weight: 'Black',
        size: 64,
        lineHeight: 1.1,
        families: ['Playfair Display'],
      },
      description: {
        color: STATUS_DESC[page.status] ?? RGB.blackberrySoft,
        weight: 'Normal',
        size: 26,
        lineHeight: 1.4,
        families: ['Inter'],
      },
    },
    fonts: [
      'https://api.fontsource.org/v1/fonts/playfair-display/latin-900-normal.ttf',
      'https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf',
    ],
  }),
});
