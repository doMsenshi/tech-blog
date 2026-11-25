import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export default function Home() {
  const posts = getAllPosts();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">つまずきと解決のメモ</h1>
      <p className="text-zinc-600 mb-8 text-sm">
        サーバーサイドエンジニアが Linux / AWS / DB で学んだことを書きます。
      </p>
      <div className="space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="border rounded-lg p-5 hover:shadow-sm transition">
            <Link href={`/posts/${p.slug}/`}>
              <h2 className="font-bold text-lg hover:underline">{p.title}</h2>
            </Link>
            <div className="text-xs text-zinc-500 mt-1">
              {p.date} {p.tags.map((t) => `#${t} `)}
            </div>
            <p className="text-sm text-zinc-700 mt-2">{p.excerpt}</p>
          </article>
        ))}
        {posts.length === 0 && <p className="text-sm">まだ記事がありません。</p>}
      </div>
    </div>
  );
}
