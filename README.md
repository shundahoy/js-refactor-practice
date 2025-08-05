# javaScript リファクタリング練習環境

このリポジトリは、javaScript でリファクタリング手法を学ぶための練習環境です。

---

## 📦 セットアップ方法

この環境は Docker Compose を使って構築されます。

### 1. Docker イメージのビルドと起動

```bash
docker compose up -d --build
```

起動後、以下でコンテナに入ります：

```bash
docker compose exec app bash
```

依存関係のインストール

```bash
npm install
```

### 2. テスト実行方法

```bash
npm test
```

特定のフォルダのみテスト

```bash
npx jest problems/ExampleProblem1/after
```
