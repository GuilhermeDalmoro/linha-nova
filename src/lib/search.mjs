export const normalize = (value = '') => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
export function searchPosts(posts, query) {
  const terms = normalize(query).split(' ').filter(Boolean);
  if (!terms.length) return posts;
  return posts.map(post => {
    const title = normalize(post.title);
    const labels = normalize(`${post.category} ${post.tags.join(' ')}`);
    const summary = normalize(post.description);
    const haystack = `${title} ${labels} ${summary} ${normalize(post.body)}`;
    if (!terms.every(term => haystack.includes(term))) return null;
    const score = terms.reduce((n,term) => n + (title.includes(term)?6:0) + (labels.includes(term)?3:0) + (summary.includes(term)?2:0), 0);
    return {post,score};
  }).filter(Boolean).sort((a,b)=>b.score-a.score || b.post.date.localeCompare(a.post.date)).map(item=>item.post);
}
