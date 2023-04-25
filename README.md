# フロントエンドテンプレートアプリ

Web アプリ開発案件で使用する、フロントエンドテンプレートリポジトリ

## 環境設定

### モックサーバー起動

- 以下のコマンドを実行し、モックサーバーを起動  
  `$ prism mock ./docs/swagger.yml`

- `./.env`ファイル作成し、モックサーバーのエンドポイントを`VITE_API_URL`に指定

```
VITE_API_URL=http://localhost:4010
```

### アプリ起動

`$ yarn start`

## 設定ファイル

- `docs/swagger.yml`: API 仕様書ファイル(通信処理ファイルの自動生成に使用)
- `.eslintrc.js`: eslit 設定ファイル
- `.prettierrc`: prettier 設定ファイル
- `openapi-config.ts`: `RTK Query`用の API 通信処理ファイル生成設定ファイル
- `postcss.config.js`: CSS ファイルビルド設定ファイル
- `tailwind.config.js`: tailwindCSS 設定ファイル
- `vite.config.ts`: vite 開発設定ファイル

## src フォルダ構成

```
├── assets // アセットファイル
├── common // 共通ファイル
├── components // コンポーネントファイル
│   ├── features // ドメインに関心を持つコンポーネント
│   │   ├── header
│   │   │   ├── components // 最小単位コンポーネント
│   │   │   └── hooks // カスタムフック
│   │   └── login
│   │       ├── assets
│   │       ├── components
│   │       └── hooks
│   ├── pages // url単位ごとに作成されるコンポーネント
│   └── ui // ドメインに関心を持たないコンポーネント
│       ├── button
│       ├── layout
│       └── textField
└── store // reduxストア
    └── services // API通信用ファイル
```

※`features`と`ui`は、他プロジェクトで使い回せるかどうかで判断

## 主な使用ライブラリ

| ライブラリ           | Docs                                                      |
| :------------------- | :-------------------------------------------------------- |
| redux-toolkit        | https://redux-toolkit.js.org/introduction/getting-started |
| react-hook-form      | https://react-hook-form.com/api                           |
| daisyUI(tailwindcss) | https://daisyui.com/components                            |
