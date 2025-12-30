- JSにおいて入れ子の配列をフラット化する一般的なテクニック
- もっといい方法　＝　flat()という便利なメソッドがある
- 全ての部分配列を一次元的な配列に変換することで、入れ子の配列を素早くフラット化できる

```javascript:index.js
const nestedArray = ["apple",["blueberry","blackberry"],["tangerine","orange"],"grape"];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray);
```

- depth というオプションパラメータを指定するとフラット化する入れ子のレベルの数を制御できる