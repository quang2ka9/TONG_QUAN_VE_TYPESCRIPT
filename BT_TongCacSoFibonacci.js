var f = 0, f0 = 0, f1 = 0;
var fibonacci = 0;
for (var i = 0; i < 20; i++) {
    if (i === 0) {
        f = 1;
        f1 = 1;
        fibonacci += f;
    }
    else {
        f = f0 + f1;
        f0 = f1;
        f1 = f;
        fibonacci += f;
    }
}
console.log(fibonacci);
