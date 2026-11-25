import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Tech Blog | サーバーサイドエンジニアの学びメモ',
  description: 'Linux / AWS / バックエンドのつまずきと解決策を書く技術ブログ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white text-zinc-900 antialiased">
        <header className="border-b">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-bold text-lg">My Tech Blog</a>
            <nav className="text-sm flex gap-4 text-zinc-600">
              <a href="/">記事</a>
              <a href="/about/">About</a>
            </nav>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t mt-16">
          <div className="max-w-3xl mx-auto px-4 py-6 text-xs text-zinc-500">
            © {new Date().getFullYear()} My Tech Blog — Built with Next.js + AWS
          </div>
        </footer>
      </body>
    </html>
  );
}
