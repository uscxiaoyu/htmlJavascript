'use strict';

document.write("<hr>");
document.write("<p>此处是分割线</p>")
document.write("<hr>");

// function rand_n(n) {
//     let a = Math.random();
//     return Math.ceil(n*a);
// };

// function rand_norm(x, s) {
//     let a = Math.random();

// }

// var a_array = [];
// var n = 10;
// for (let j=1; j<2*n; j++) {
//     var b = rand_n(n);
//     a_array.push(b);
// };

// document.write(`运行成功！
// 产生${n}个随机整数: ${a_array}<br>`);
// document.write(a_array);
// var wd = "一二三四五六日"
// var d = new Date();
// // document.write('<br>')
// // document.write(d.getDate());
// // document.write(d.getDay());
// // document.write(d.getFullYear());
// // document.write(d.getTime());
// document.write(`<br>${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 星期${wd[d.getDay()-1]}<br>`);

// var a = [1, 2, 3, 88];
// document.write(...a);  // 解包
// document.write('<br>');

// var b = {
//     name: 'xiaoyu',
//     age: '20'
// };

// var c = {
//     ...b,  // 解包
//     address: '上海'
// };

// document.write(`<p id="name" style="background-color:green">${c.name}</p>`);
document.title = '这是一个实验！';

let ppp = document.getElementsByClassName("info")[0]; // 得到1个列表
ppp.style.backgroundColor = 'grey';
ppp.style.fontSize = "1.5em";

let job = document.querySelector(".content");
job.style.fontSize = '1.5em';
job.style.backgroundColor = 'yellow';

let bc_img = document.getElementsByTagName("img")[0];
let img_path = bc_img.getAttribute("src");
document.write(img_path);

var e1 = document.createElement("div");
var txt = document.createTextNode("dividivdiividivdividiv");
e1.style.fontSize = '1.5em';
e1.style.backgroundColor = 'grey';
e1.style.margin = "20px";
e1.style.border = '10px';

let body = document.body;

e1.appendChild(txt);
body.appendChild(e1);
body.insertBefore(e1, job);

body.removeChild(job);
document.write("<hr>");

var div1 = document.createElement("div");
var b1 = document.createElement("input");
div1.style.backgroundColor = 'grey';

b1.id = 'btn';
b1.type = 'button';
b1.value = '按钮';
div1.appendChild(b1);


document.write("<hr>");

var b2 = document.createElement("button");
b2.id = 'btn2';
b2.innerText = "Click Me!!!";
div1.appendChild(b2);

body.appendChild(div1);

let bt = document.getElementById("btn2");

bt.onclick = function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    div1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

let input = document.getElementById("input");
let output = document.getElementById("output");

input.onkeyup = () => {
    output.innerHTML = input.value;
}

let thebox = document.getElementById("thebox");
let step = 5;
document.body.onkeydown = (e) => {
    if (e.keyCode == 38) {
        thebox.style = (parseInt(thebox.style.top) - step) + "px";
    } else if (e.keyCode == 40) {
        thebox.style = (parseInt(thebox.style.top) + step) + "px";
    } else if (e.keyCode == 37) {
        thebox.style = (parseInt(thebox.style.left) - step) + "px";
    } else if (e.keyCode == 39) {
        thebox.style = (parseInt(thebox.style.left) + step) + "px";
    }
}








// window.onload = function () {} 事件