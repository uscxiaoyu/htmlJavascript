'use strict';
function rand_n(n) {
    let a = Math.random();
    for (let i=1; i<=n; i++){
        if ((i - 1)/n <= a && a < i/n) {
            return i;
        }
    };
};

var a_array = [];
var n = 20;
for (let j=1; j<2*n; j++) {
    var b = rand_n(n);
    a_array.push(b);
};

alert(`运行成功！
产生${n}个随机整数: ${a_array}`);
document.write(a_array);