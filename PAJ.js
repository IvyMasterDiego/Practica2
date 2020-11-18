const { Console } = require('console');

//Programa de persistencia aditiva
const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question('Enter a number with more than one digit: ', num=>{
    const sumDigit=(num,sum=0)=>{
        if(num){
            return sumDigit(Math.floor(num/10),sum+num%10);
        };
        return sum;
    };
    const persistence=num=>{
        num=Math.abs(num);
        let res=0;
        while(num>9){
            num=sumDigit(num);
            res++;
        };
        return res;
    };
    console.log("The persistence of "+ num +" it is " + persistence(num));
    readline.close();
})