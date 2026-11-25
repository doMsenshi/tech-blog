# My Tech Blog — Next.js + GitHub + AWS 最小スタート

サーバーサイドエンジニアの練習用。ちっちゃく始めて大きく育てる構成。

## 構成 (Phase 1: 月数百円)

```
Next.js 静的エクスポート → S3 → CloudFront → 公開
GitHub (main に merge → Actions が自動デプロイ)
Terraform で AWS をコード管理
```

| 項目 | 選択 | 月額目安 |
|---|---|---|
| ホスティング | S3 + CloudFront (PriceClass_100) | 〜数百円 |
| DB | なし (Markdown) | 0円 |
| 独自ドメイン | 後付け可 (Route53 〜数百円) | 0円〜 |
| 合計 | | **3000円以内に余裕で収まる** |

RDS / ECS は Phase 2 以降。最初は入れない = 安くてシンプル。

## 使い方

```bash
cd tech-blog
npm install
npm run dev      # http://localhost:3000
npm run build    # out/ に静的生成
```

記事は `tech-blog/content/posts/*.md` に追加するだけ。

## GitHub 運用 (マイクロ開発)

1. `main` = 本番。直push禁止、PRでマージ
2. 記事1本 = 1ブランチ `post/xxx` → PR → CIがビルド → マージで自動公開
3. 機能追加も同じ (`feat/comment` など)

```
git checkout -b post/my-first-trouble
# content/posts/xxx.md を書く
git push → PR → CI green → merge → 自動で公開
```

初回だけ GitHub Secrets に設定:
`AWS_ROLE_ARN, S3_BUCKET, CLOUDFRONT_ID`

## AWS デプロイ (初回のみ)

```bash
cd tech-blog/terraform
terraform init
terraform apply   # S3 + CloudFront ができる
# 出力された cloudfront_url にアクセス
```

独自ドメインは取れてから `variables.tf` の domain を埋めて Phase 1b で対応。

## ロードマップ

- [x] Phase 1: 静的ブログ + CI/CD + Terraform (今ここ)
- [ ] Phase 1b: 独自ドメイン + HTTPS + AdSense
- [ ] Phase 2: DB化 (RDS Postgres + Prisma) + コメント/いいね + 管理画面
- [ ] Phase 3: 検索、PVランキング、OGP自動生成、Sentry/CloudWatch
- [ ] Phase 4: ECS移行 (SSR/ISR) の実験

## 次の一手おすすめ

1. このまま `npm run dev` で触る
2. GitHub に push して PR 運用を1周回してみる
3. 独自ドメインを取る (お名前.com / Route53 どちらでも)
