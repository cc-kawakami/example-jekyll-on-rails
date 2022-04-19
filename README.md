# README

We use [testdouble/static-rails: Build & serve static sites (e.g. Jekyll, Hugo) from your Rails app](https://github.com/testdouble/static-rails).

## Development

```
bundle
```

```
cd static && bundle && cd ../
```

```
foreman start -f Procfile.dev
```

```
open http://localhost:3000/
```

## 意図

以下の3つを両立させる。

1. **完全な静的ページ**は、Model や View を気にしなくても実装できるようにして、リリースコストを下げたい
2. **一部動的なパーツがあるページ**は、APIをめぐる複雑な設計の手続きを回避したい
3. **フォームのような複雑な機能**は、 API や Vue.js などを用いずに Rails のようなフルスタックなフレームワークで実現したい

### 実例
1. Jekyll のみで実現したページ
```
open http://localhost:3000/about/
```

3. Jekyll と Turbo Frames, Rails を組み合わせて実現したページ
```
open http://localhost:3000/
```

3. Rails の (M)VC で実現したページ
```
open http://localhost:3000/jobs
```
