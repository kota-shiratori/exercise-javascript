const nestedArray = ["apple",["blueberry","blackberry"],["tangerine","orange"],"grape"];
const newArr = [].concat.apply([],nestedArray);
console.log(newArr);