- クロージャ (Closure) とは関数が、自分が定義されたスコープの変数を「覚えている」仕組み
- 関数の外側にある変数を、関数の実行時にも参照できる

```javascript:index.js
for (var i = 0; i < 5; i++) {
    counterArray.push(() => {
        console.log(`Counter: ${i}`);  // 全部 "Counter: 5" になる
    });
}
```

- `var` は関数スコープなので、すべてのクロージャが**同じ `i`** を参照
- ループ終了後に `i` は `5` → 全関数が `5` を出力
- 解決策: `let` を使う

```javascript
for (let i = 0; i < 5; i++) {  // let はブロックスコープ
    counterArray.push(() => {
        console.log(`Counter: ${i}`);  // 0, 1, 2, 3, 4 と出力される
    });
}
```

`let` は各ループで新しい変数を作るので、各クロージャが別々の値を保持する