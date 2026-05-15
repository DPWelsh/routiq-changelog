import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const entries = await getCollection('changelog', ({ data }) => !data.draft);
const pages = Object.fromEntries(entries.map(({ id, data }) => [id, data]));

/*
 * Brand v2.0 mapping (Routiq):
 *  core      #1a1c12  → bg
 *  cloud     #ededeb  → primary text
 *  clay      #c98b7a  → accent / border
 *  prompt    #7ba2e0  → secondary accent
 *  blackberry#472424  → elevated surface
 */
const RGB = {
  core: [26, 28, 18] as [number, number, number],
  cloud: [237, 237, 235] as [number, number, number],
  cloudDim: [168, 169, 160] as [number, number, number],
  clay: [201, 139, 122] as [number, number, number],
  prompt: [123, 162, 224] as [number, number, number],
  blackberry: [71, 36, 36] as [number, number, number],
};

const CATEGORY_ACCENT: Record<string, [number, number, number]> = {
  feature: RGB.clay,
  improvement: RGB.prompt,
  fix: RGB.clay,
  docs: RGB.cloudDim,
  announcement: RGB.clay,
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  param: 'slug',
  getImageOptions: (_path: string, page: any) => ({
    title: page.title,
    description: `routiq.  /  changelog  ·  ${new Date(page.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}  ·  ${page.category}`,
    bgGradient: [RGB.core],
    border: { color: CATEGORY_ACCENT[page.category] ?? RGB.clay, width: 8, side: 'inline-start' },
    padding: 80,
    font: {
      title: {
        color: RGB.cloud,
        weight: 'Black',
        size: 64,
        lineHeight: 1.1,
        families: ['Inter'],
      },
      description: {
        color: RGB.cloudDim,
        weight: 'Normal',
        size: 26,
        lineHeight: 1.4,
        families: ['Inter'],
      },
    },
    fonts: [
      'https://api.fontsource.org/v1/fonts/inter/latin-900-normal.ttf',
      'https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf',
    ],
  }),
});
