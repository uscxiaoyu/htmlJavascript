'use strict';
function rand_n(n) {
    let a = Math.random();
    return Math.ceil(n*a);
};

function rand_norm(x, s) {
    let a = Math.random();

}

var a_array = [];
var n = 10;
for (let j=1; j<2*n; j++) {
    var b = rand_n(n);
    a_array.push(b);
};

document.write(`运行成功！
产生${n}个随机整数: ${a_array}<br>`);
document.write(a_array);
var wd = "一二三四五六日"
var d = new Date();
// document.write('<br>')
// document.write(d.getDate());
// document.write(d.getDay());
// document.write(d.getFullYear());
// document.write(d.getTime());
document.write(`<br>${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 星期${wd[d.getDay()-1]}<br>`);

var a = [1, 2, 3, 88];
document.write(...a);  // 解包
document.write('<br>');

var b = {
    name: 'xiaoyu',
    age: '20'
};

var c = {
    ...b,  // 解包
    address: '上海'
};

document.write(c.name);

// window.onload = function () {} 事件