var getTriangle = function(base, height) {
  return //returnの後に改行を入れてしまったことで思わぬエラーに繋がる。
         //「;」が自動補完されてしまっている。→結果はundefined
  base * height / 2;
};

console.log('三角形の面積：' + getTriangle(5, 2));