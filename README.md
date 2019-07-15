# Sample Vue ContactForm

Vue.js + Vue Router + Vuexを使った、お問い合わせフォームのサンプル。

ページの構成は、入力→確認→完了画面になっており、完了画面では入力したデータをconsoleに出力しています。

## Point
- Vue Routerでルーティングを行い、各画面を遷移
- Vuexを導入してデータはstoreに集約、コンポーネント間で共有
- storeをフォーム用に名前空間付きのcontactモジュールに分割、拡張性を考慮
- 複数のstateをmapStateヘルパーでバインドし、記述を簡潔化
- ミューテーションのコミットをmapMutationsヘルパーでまとめる
- 入力有無をstateで管理し、確認・完了画面に直接アクセスすると入力画面に遷移
- 存在しないページは、404ページを表示

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
