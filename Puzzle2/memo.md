- JSでは他の言語でお馴染みの**関数のオーバーロード**をサポートしていない
- 関数のオーバーロード：名前が同じで異なるパラメータリストを持つ複数の関数を定義できる機能のこと
- JSでは同じ名前の関数の場合、最後に定義した関数が呼び出される
- 関数を個別に定義する代わりに、関数を一つだけ書き、その中で引数の方や個数をチェックし、その結果に基づいて関数の動作を変えることが出来る

```javascript:index.js
function calculateArea(length, width) {
    if (width === undefined) {
        return length * length;
    } else {
        return length * width;
    }
}
```