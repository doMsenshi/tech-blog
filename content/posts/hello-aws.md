---
title: "ブログ開設メモ：なぜNext.js + AWSにしたか"
date: "2026-11-25"
tags: ["Next.js", "AWS", "設計"]
excerpt: "練習を兼ねた技術ブログの最小構成。月3000円以内で始める設計の記録。"
---

## やりたいこと

- エンジニアの練習として一から構築する
- 業務でのつまずきと解決策を記事にする
- 月数千円から収益化を狙う

## 選んだ構成 (Phase 1)

- Next.js (静的エクスポート) + TypeScript + Tailwind
- 記事は Markdown で管理 (`content/posts`)
- インフラは S3 + CloudFront のみ。月数百円で収まる

```bash
npm run dev   # ローカル開発
npm run build # out/ に静的ファイル生成
```

## 次にやること (Phase 2〜)

1. GitHub Actions で S3 へ自動デプロイ
2. 独自ドメイン + HTTPS (ACM + Route53)
3. DB化 (RDS Postgres + Prisma) でコメント機能
