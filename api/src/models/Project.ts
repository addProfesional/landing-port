export type Project = {
  id: number,
  name: string,
  description: string,
  categories: string[],
  demo: string,
  github: string,
  video: string | null,
  images: string[],
  createdAt: string,
  modified: string[],
  status: 'enabled' | 'disabled',
  files: string[]
};