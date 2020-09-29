var value = [1, 2, 4, 8, 16];

function decrementValue(value) {
  value.pop();
  return value;
};

console.log(decrementValue(value));//①
console.log(value);//②
// 参照型は参照元の値を変更させるので仮引数がローカル変数だとしても
// ①でグローバル変数を仮引数に入れているので、②も同じ値に変更される。