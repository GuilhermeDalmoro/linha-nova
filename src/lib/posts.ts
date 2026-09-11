import { getCollection, type CollectionEntry } from 'astro:content';
import siteConfig from '../../site.config.mjs';
export type Post = CollectionEntry<'posts'>;
export const categories = [
  { name: 'Política', slug: 'politica', color: 'blue', description: 'O espaço público, suas escolhas e seus caminhos.' },
  { name: 'História', slug: 'historia', color: 'red', description: 'O passado ainda tem muito a nos dizer.' },
  { name: 'Religião', slug: 'religiao', color: 'yellow', description: 'Fé, tradição e as perguntas que permanecem.' },
  { name: 'Filosofia', slug: 'filosofia', color: 'blue', description: 'Demorar um pouco mais nas boas perguntas.' },
  { name: 'Cultura', slug: 'cultura', color: 'red', description: 'Livros, arte e modos de enxergar o cotidiano.' },
  { name: 'Tecnologia', slug: 'tecnologia', color: 'yellow', description: 'Ferramentas, código e uma internet mais nossa.' },
] as const;
export const slugify = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export function path(route = '') { return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${route.replace(/^\//, '')}`; }
export const postPath = (post: Post) => path(`textos/${post.id}/`);
export const absolute = (route = '') => new URL(path(route), import.meta.env.SITE).href;
export const imagePath = (url: string) => url.startsWith('/') && !url.startsWith('//') ? path(url) : url;
export const dateLabel = (date: Date) => new Intl.DateTimeFormat('pt-BR', {day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(date);
export const shortDate = (date: Date) => new Intl.DateTimeFormat('pt-BR', {day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(date).replace(/ de /g,' ');
export function plainText(body = '') { return body.replace(/```[\s\S]*?```/g, ' ').replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/<[^>]+>/g, ' ').replace(/[#*_~`>|]/g, ' ').replace(/\s+/g,' ').trim(); }
export const readingTime = (post: Post) => Math.max(1, Math.ceil(plainText(post.body).split(/\s+/).filter(Boolean).length / 200));
export const getPosts = async () => (await getCollection('posts', ({ data }) => !data.draft)).sort((a,b) => b.data.date.valueOf()-a.data.date.valueOf() || a.id.localeCompare(b.id));
export const authorRepository = () => typeof __AUTHOR_REPOSITORY__ === 'string' ? __AUTHOR_REPOSITORY__ : siteConfig.repository;
export const safeLink = (url: string) => /^(https:\/\/|mailto:)/i.test(url);
export function allTags(posts: Post[]) { return [...new Set(posts.flatMap(p => p.data.tags))].sort((a,b)=>a.localeCompare(b,'pt-BR')); }
