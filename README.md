# Ex-Port.net ホームページ

株式会社Ex-Port.netの公式ホームページです。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **メール送信**: Nodemailer
- **アイコン**: Heroicons + カスタムSVG

## セットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/d-sakai31/ex-port-net-hp.git
cd ex-port-net-hp

# 依存関係をインストール
npm install
```

### 環境変数の設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```env
# SMTP設定
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password

# 連絡先メール
CONTACT_EMAIL=info@ex-port.net
```

### 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3000 でアプリケーションが起動します。

## 主な機能

- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **アニメーション**: スムーズなスクロールアニメーションとインタラクション
- **お問い合わせフォーム**: メール送信機能付き（管理者通知 + 自動返信）
- **SEO対応**: メタタグとOGP設定
- **高速パフォーマンス**: Next.js の最適化機能を活用

## ディレクトリ構成

```
ex-port-net-hp/
├── public/              # 静的ファイル
│   └── logo.png        # 会社ロゴ
├── src/
│   ├── app/            # App Router ページ
│   │   ├── about/      # 会社概要ページ
│   │   ├── api/        # API エンドポイント
│   │   ├── contact/    # お問い合わせページ
│   │   ├── portfolio/  # ポートフォリオページ
│   │   └── page.tsx    # ホームページ
│   └── components/     # React コンポーネント
├── .env.local          # 環境変数（Git管理外）
├── package.json        # 依存関係
└── tailwind.config.js  # Tailwind CSS 設定
```

## ビルドとデプロイ

### プロダクションビルド

```bash
npm run build
```

### プロダクションサーバーの起動

```bash
npm start
```

## 会社情報

- **会社名**: 株式会社Ex-Port.net
- **住所**: 〒381-0034 長野県長野市高田五分一420
- **電話**: 080-6939-4131
- **営業時間**: 平日9:00~17:00
- **メール**: info@ex-port.net

## ライセンス

© 2025 Ex-Port.net. All rights reserved.