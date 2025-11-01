import type { ContentItem } from './'

export type ContentRow = {
  id: string;
  title: string;
  subtitle?: string;
  variant?: 'default' | 'continue';
  items: ContentItem[];
};
