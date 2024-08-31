{
    //1-masala. for1
    let k = 7
    let n = 5
    for(let i = 0; i < n; i++){
        console.log(k);
    }
}

{
    //2-masal. for2
    let a = 10
    let b = 17
    let sum = 0
    for(let i = a; i <= b; i++){
        console.log(i);
        sum = sum + 1
    }
    console.log(`a va b sonlar orasidagi chiqarilgan sonlar soni: ${sum}`);
}

{
    //3-masala for3
    let a = 3
    let b = 8
    let sum = 0
    for(let i = (b-1); i > a; i--){
        console.log(i);
        sum = sum + 1
    }
    console.log(`a va b sonlar orasidagi chiqarilgan sonlar soni: ${sum}`);
}

{
    //4-masala for4
    let price = 12_000
    for(let i = 1; i <= 10; i++){
        console.log(price * i);
    }
}

{
    //5-masala for5
    let price = 23_000
    for(let i = 0.1; i <= 1; i += 0.1){
        console.log(Math.round(price * i));
    }
}

{
    //6-masala for6
    let price = 43_000
    for(let i = 1.2; i <= 2; i += 0.2){
        console.log(Math.round(price * i));
    }
}

{
    //7-masala for7
    let a = 5
    let b = 12
    let sum = 0
    for (let i = a; i <= b; i++) {
        sum = sum + i
    }
    console.log(`${a} sonidan ${b} sonigacha bo'lgan barcha butun sonlar yig'indisi: ${sum}`);
}

{
    //8-masala for8
    let a = 4
    let b = 7
    let sum = 1
    for(let i = a; i <= b; i++){
        sum = sum * i
    }
    console.log(`${a} sonidan ${b} sonigacha bo'lgan barcha butun sonlar ko'paytmasi: ${sum}`);
}

{
    //9-masla for9
    let a = 1
    let b = 5
    let sum = 0
    for(let i = a; i <=b; i++){
        sum = sum + (Math.pow(i,2))
    }
    console.log(`${a} sonidan ${b} sonigacha bo'lgan barcha butun sonlar kvadratlarining yig'indisi: ${sum}`);
}

{
    //10-masala for10
    let n = 4
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum = sum + (1/i)
    }
    console.log(sum);
}

{
    //11-masala for11 qo'shimcha
    let n = 4
    let sum = n*n
    for(let i = 1; i <= n; i++){
        sum = sum + Math.pow((n+i), 2)
    }
    console.log(sum);
}

{
    //12-masala for12 qo'shimcha
    let n = 6
    let sum = 1
    for(let i = 1; i <= n; i++){
        sum = sum * (1 + i/10)
    }
    console.log(sum);
}

{
    //1-masala while1
    let a = 43
    let b = 9
    while(a > b){
        a -= b
    }
    console.log(a);
}

{
    //2-masala while2
    let a = 36
    let b = 6
    while(a > b){
        a -= b
    }
    console.log(a);
}

{
    //3-masala while3
    let N = 17
    let K = 3
    let qoldiq = N
    let butunQism = 0
    while(qoldiq >= K){
        qoldiq -= K
        butunQism++
    }
    console.log(`${N} sonini ${K} soniga bo'lgandagi qoldiq: ${qoldiq}`);
    console.log(`${N} sonini ${K} soniga bo'lgandagi butun qism: ${butunQism}`);
}

{
    //4-masala while4
    let n = 27
    while(n >= 3){
        n -= 3
    }
    console.log(n === 0 ? `3-ning darajasi` : `soni 3-ning darajasi emas`);
}

{
    //5-masala while5
    let n = 8
    let k = 0
    while(n > 1){
        n /= 2
        k++
    }
    console.log(`k = ${k}`);
}

{
    //7-masala while7
    let n = 6
    let k = 0
    while(!(k**2 > n)){
        k++
    }
    console.log(k);
}

{
    //8-masala while8
    let n = 25
    let k = 0
    while(k**2 < n){
        k++
    }
    console.log(k);
}

{
    //9-masala while9
    let n = 31
    let k = 0
    while(!(3**k > n)){
        k++
    }
    console.log(k);
}

{
    //10-masala while10
    let n = 10
    let k = 0
    while(3**k < n){
        k++
    }
    console.log(k);
}

{
    //qoshimcha
    let n = 15
    // n soni 3 ga bo'linsa - "Fizz"
    // n soni 5 ga bo'linsa - "Buzz"
    // n soni 3 ga va 5 ga ham bo'linsa - "FizzBuzz"
    // n soni umuman ikki songa bo'linmasa - 11 "sonning ozi yani 11"
    // n son bo'lmasa - "son emas chiqsin"
    if(n % 3 == 0 && n % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(n % 3 == 0){
        console.log("Fizz");
    }
    else if(n % 5 == 0){
        console.log("Buzz");
    }
    else if(!(n % 3 == 0) && !(n % 5 == 0)){
        console.log(n);
    }else{
        console.log("son emas");
    }

}