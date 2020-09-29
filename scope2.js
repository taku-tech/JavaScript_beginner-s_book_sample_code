scope = 'Global Variable';

function getValue() {
  scope = 'Local Variable';
  return scope;
}

console.log(getValue());
console.log(scope);

//varの宣言なしでは全てがグローバル変数と認識される。