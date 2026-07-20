# 楓月整体院 (akatsuki-seitai)

仙台市泉区の整体院コーポレートサイト。

## 技術構成
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Vercel デプロイ
- メール送信: Resend (Server Actions)

## 設計方針
- SSG優先、Server Components基本
- Client Componentsは最小限（ハンバーガーメニュー、FAQ、カルーセル、フォーム）
- データはTSファイルで管理（将来ヘッドレスCMS化を想定）
- `any`禁止、型を厳格に定義

## SEO
- エリア: 仙台市泉区
- 対象症状: 腰痛、首、肩こり、膝の痛み、股関節痛
- Metadata API + JSON-LD構造化データ
- FAQPage, LocalBusiness, BreadcrumbList

## コマンド
- `npm run dev` — 開発サーバー起動
- `npm run build` — ビルド
- `npm run lint` — ESLint
