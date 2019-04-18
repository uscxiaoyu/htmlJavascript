function rand_n(n) {
    let a = Math.random();
    for (let i=1; i<=n; i++){
        if ((i - 1)/n <= a <= i/n) {
            return i;
        };
    };
};

for (let j=1; j<10; j++) {
    document.write(rand_n(5));
    document.write("<br>")
}
