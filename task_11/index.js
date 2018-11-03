let n = 1000;
let sum = 0;
let quantity = 0;

for (let i = 0; i <= n; i++){
    sum = n;
    n /= 2 ;
    if (n < 50) {
        quantity = i;
        break;
    }
}
console.log(sum)
console.log(quantity)