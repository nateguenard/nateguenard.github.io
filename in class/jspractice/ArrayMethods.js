const numbers = [1,2,3,4,5];

numbers.map(function (num){
    return num * 2;
})

console.log(numbers.map(x => x*x));

console.log(numbers.filter(function (num){
    return num < 3;
}));

console.log(numbers.filter(n => (n%2 == 0)));

