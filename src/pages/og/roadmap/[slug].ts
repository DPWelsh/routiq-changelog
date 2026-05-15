import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const entries = await getCollection('roadmap');
const pages = Object.fromEntries(entries.map(({ id, data }) => [id, data]));

const RGB = {
  core: [26, 28, 18] as [number, number, number],
  cloud: [237, 237, 235] as [number, number, number],
  cloudDim: [168, 169, 160] as [number, number, number],
  clay: [201, 139, 122] as [number, number, number],
  prompt: [123, 162, 224] as [number, number, number],
};

const STATUS_LABEL: Record<string, string> = {
  now: 'In progress',
  next: 'Next',
  later: 'Later',
  shipped: 'Shipped',
};

const STATUS_ACCENT: Record<string, [number, number, number]> = {
  now: RGB.clay,
  next: RGB.prompt,
  later: RGB.cloudDim,
  shipped: RGB.prompt,
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  param: 'slug',
  getImageOptions: (_path: string, page: any) => ({
    title: page.title,
    description: `routiq.  /  roadmap  ·  ${STATUS_LABEL[page.status] ?? page.status}`,
    bgGradient: [RGB.core],
    border: { color: STATUS_ACCENT[page.status] ?? RGB.clay, width: 8, side: 'inline-start' },
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
