let n = 1000;
let prom = 0;
let colIt = 0;

for (let i = 0; i<1000; i++){
    colIt = i;
    prom = n;
    n = n / 2;
    

    if (n < 50){
        break
    }
}

console.log(`Получилось такое число: ${prom} \nКоличество итераций: ${colIt}`)