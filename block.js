(function() {
  var i = 5;
  console.log(i);
}).call(this);

console.log(i); //エラー(Uncaught ReferenceError: i is not defined)

// 関数をスコープの枠組みとして利用する例