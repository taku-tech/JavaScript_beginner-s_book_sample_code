var scope = 'Global Variable';

function getValue() {
  console.log(scope); //ローカル変数が宣言される前に出力しようとしているのでundefind
  var scope = 'Local Variable';
  return scope;
}

console.log(getValue());
console.log(scope);