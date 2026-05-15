import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const entries = (await getCollection('changelog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Routiq Changelog',
    description: 'What we shipped at Routiq.',
    site: context.site ?? 'https://changelog.routiq.ai',
    items: entries.map(entry => ({
      title: entry.data.title,
      description: entry.data.summary ?? '',
      pubDate: entry.data.date,
      link: `/changelog/${entry.id}/`,
      categories: [entry.data.category],
    })),
    customData: '<language>en-us</language>',
  });
}
