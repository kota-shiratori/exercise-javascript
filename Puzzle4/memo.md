- +演算子を使って2つの配列を1つの大きな配列に結合しようとしている
- 配列で＋演算子を使った場合はJSでは配列が文字列として扱われてしまい、結果として文字列の連結になる
- 2つの配列を結合する方法
1. concat()
```javascript:index.js
const array1 = [1,2,3];
const array2 = [4,5,6];
const combinedArray = array1.concat(array2);
```
2. スプレッド演算子
```javascript:index.js
const array1 = [1,2,3];
const array2 = [4,5,6];
const combinedArray = [...array1, ...array2];
```

3. push()またはunshift()
```javascript:index.js
const array1 = [1,2,3];
const array2 = [4,5,6];
array1.push(...array2); // 1,2,3,4,5,6
array1.unshift(...array2); // 4,5,6,1,2,3
```

4. splice()
```javascript:index.js
const array1 = [1,2,3];
const array2 = [4,5,6];
const insetIndex = 2;
array1.splice(insetIndex, 0, ...array2);
```

- concat()とスプレッド演算子は既存の配列の内容を変更するのではなく、新しい配列を返す
- push(),unshift(),splice()は適用先の配列の内容を変更する