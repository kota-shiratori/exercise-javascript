- JSでは全ての宣言が**巻き上げ（hosting）**の対象になる

```javascript:index.js
var a =10;

//このコードは次のように処理される。
var a;
a = 10;
```

- let,constの場合はエラーになる
- TDZ(Temporal Dead Zone) = let,constはどちらもvarやfunctionの宣言と同じように巻き上げられるが、スコープに入ってから宣言されるまでの間に、それらにアクセスできない期間がある。この期間がTDZ
- TDZは変数が宣言されているコードブロック(スコープ)にのみ適用される