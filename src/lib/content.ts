import { getCollection } from 'astro:content';

// Drafts are visible while developing and hidden from production builds.
export const showDrafts = import.meta.env.DEV;

export async function getWork() {
  const entries = await getCollection('work', ({ data }) => showDrafts || !data.draft);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getPosts() {
  const entries = await getCollection('writing', ({ data }) => showDrafts || !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
