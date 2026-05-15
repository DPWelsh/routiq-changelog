import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const entries = await getCollection('changelog', ({ data }) => !data.draft);
const pages = Object.fromEntries(entries.map(({ id, data }) => [id, data]));

/*
 * V3 palette — cream bg, blackberry text, clay accent. No blue.
 */
const RGB = {
  cream: [245, 240, 235] as [number, number, number],
  blackberry: [26, 28, 18] as [number, number, number],
  blackberrySoft: [110, 101, 87] as [number, number, number],
  clay: [201, 139, 122] as [number, number, number],
  clayDeep: [168, 107, 90] as [number, number, number],
  stone: [217, 208, 194] as [number, number, number],
};

const CATEGORY_ACCENT: Record<string, [number, number, number]> = {
  feature: RGB.clay,
  improvement: RGB.clayDeep,
  fix: RGB.clay,
  docs: RGB.blackberrySoft,
  announcement: RGB.clay,
};

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'slug',
  pages,
  getImageOptions: (_path: string, page: any) => ({
    title: page.title,
    description: `routiq.  /  changelog  ·  ${new Date(page.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}  ·  ${page.category}`,
    bgGradient: [RGB.cream],
    border: { color: CATEGORY_ACCENT[page.category] ?? RGB.clay, width: 10, side: 'inline-start' },
    padding: 80,
    font: {
      title: {
        color: RGB.blackberry,
        weight: 'Black',
        size: 64,
        lineHeight: 1.1,
        families: ['Playfair Display'],
      },
      description: {
        color: RGB.blackberrySoft,
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
