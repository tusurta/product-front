# フロントエンドテンプレートアプリ

## 環境設定

### モックサーバー起動

- 以下のコマンドを実行し、モックサーバーを起動  
  `$ prism mock ./docs/swagger.yml`

- `./.env`ファイル作成し、モックサーバーのエンドポイントを`VITE_API_URL`に指定

```
VITE_API_URL=http://localhost:4010
```
