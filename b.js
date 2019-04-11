let a = [1, 2, 3, 4, 5];
a.push(6);

console.log(a[0]);
console.log(a[7]);

let f = function(x) {
    console.log(x);
};

a.forEach(f);  // 函数式编程

a.forEach( x => {
    console.log(x);
}) // es6写法

let b = a.map(item => {
    return item ** 2;
})

let sum_a = a.reduce(function(p, x){
    return p + x;
}, 0);

console.log(sum_a);

let obj = {};

let frank = {
    name: 'lili',
    age: 33,
    address: 'wenxianglu',
    say: function (str) {
        console.log(str);
    }
}

frank.name = "abcd";
frank["name"] = 'abcd';

for (let k in frank) {
    console.log(k + ":" + frank[k]);
};

// filter


// 解构

const {name, age} = frank;
console.log(name + " " + age);
console.log(`${name} = ${age}`);
