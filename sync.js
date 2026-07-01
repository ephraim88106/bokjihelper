#!/usr/bin/env node
// archive 폴더의 새 HTML을 posts.js + posts-content.js에 자동 반영
// 사용법: node sync.js

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { execSync } from 'child_process';

// 이미 등록된 ID 목록 추출
const postsJs = readFileSync('posts.js', 'utf-8');
const existingIds = new Set([...postsJs.matchAll(/^\s+id:\s*(\d+)/gm)].map(m => +m[1]));

// archive 파일 스캔
const files = readdirSync('archive').filter(f => f.endsWith('.html')).sort();
const newEntries = [];

for (const file of files) {
  const html = readFileSync(`archive/${file}`, 'utf-8');

  // post-meta 추출
  const metaMatch = html.match(/<script[^>]+id="post-meta"[^>]*>([\s\S]*?)<\/script>/);
  if (!metaMatch) { console.log(`SKIP (no post-meta): ${file}`); continue; }

  const meta = JSON.parse(metaMatch[1]);
  if (existingIds.has(meta.id)) { console.log(`SKIP (already exists): ${file} (id ${meta.id})`); continue; }

  // post-content 추출
  const contentMatch = html.match(/<div[^>]+id="post-content"[^>]*>([\s\S]*?)<\/div>\s*(?=<\/|$)/);
  if (!contentMatch) { console.log(`SKIP (no post-content): ${file}`); continue; }

  newEntries.push({ meta, content: contentMatch[1] });
  console.log(`NEW: ${file} (id ${meta.id})`);
}

if (newEntries.length === 0) {
  console.log('추가할 새 항목이 없습니다.');
  process.exit(0);
}

// ID 내림차순 정렬
newEntries.sort((a, b) => b.meta.id - a.meta.id);

// posts.js 업데이트 — newsArticles = [ 바로 뒤에 삽입
const newPostsEntries = newEntries.map(({ meta }) =>
  `  {\n    id: ${meta.id},\n    title: ${JSON.stringify(meta.title)},\n    date: ${JSON.stringify(meta.date)},\n    summary: ${JSON.stringify(meta.summary)}\n  },`
).join('\n');

const updatedPostsJs = postsJs.replace(
  'export const newsArticles = [',
  `export const newsArticles = [\n${newPostsEntries}`
);
writeFileSync('posts.js', updatedPostsJs);

// posts-content.js 업데이트 — }; 바로 앞에 삽입
const contentJs = readFileSync('posts-content.js', 'utf-8');
const newContentEntries = newEntries.map(({ meta, content }) => {
  const escaped = content.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
  return `  ${meta.id}: "${escaped}",`;
}).join('\n');

const updatedContentJs = contentJs.replace(/\n\};\s*$/, `\n${newContentEntries}\n};\n`);
writeFileSync('posts-content.js', updatedContentJs);

console.log(`\n✓ ${newEntries.length}건 추가 완료`);

// 검증
try {
  execSync('node -e "import(\'./posts-content.js\').then(m=>console.log(\'OK:\',Object.keys(m.newsContent).length,\'entries\')).catch(e=>{console.error(e);process.exit(1)})"', { stdio: 'inherit' });
} catch {
  console.error('posts-content.js 로드 실패! 확인 필요.');
  process.exit(1);
}

// commit + push
const ids = newEntries.map(e => e.meta.id).join(', ');
execSync(`git add posts.js posts-content.js`, { stdio: 'inherit' });
execSync(`git commit -m "feat: 복지뉴스 ${newEntries.length}건 추가 (id ${ids})"`, { stdio: 'inherit' });
execSync(`git push`, { stdio: 'inherit' });
console.log('✓ commit + push 완료');
