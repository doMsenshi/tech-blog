import { getAllPosts, getPostBySlug } from '../../../lib/posts';

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return { title: `${post.title} | My Tech Blog` };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return (
    <article>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <div className="text-xs text-zinc-500 mt-2 mb-6">
        {post.date} {post.tags.map((t) => `#${t} `)}
      </div>
      <div className="prose-custom" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
