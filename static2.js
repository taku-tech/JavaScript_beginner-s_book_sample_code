console.log('三角形の面積：' + getTriangle(5, 2));

var getTriangle = function(base, height) {
  return base * height / 2;
};
//関数リテラル、Functionコンストラクターは実行時に評価されるため、
//上記の記述はエラー(Uncaught TypeError: getTriangle is not a function)