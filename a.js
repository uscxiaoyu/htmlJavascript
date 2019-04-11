let n = 3;

for (let i=n; i>=0; i--){
    for (let j=0; j<i; j++){
        document.write('-');
    }
    let startNum = 2*(n-i) + 1;
    for (let j=0; j<startNum; j++){
        document.write('*')
    }
    document.write('<br>')
}
