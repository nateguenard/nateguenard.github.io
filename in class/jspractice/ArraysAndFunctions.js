function multiplyBy2(input){
    return input *2;
}
console.log(multiplyBy2(10));

const multiplyBy3 = function (input){return input * 3};
console.log(multiplyBy3(10));

const greet = (name) => ("Hey " + name);
console.log(greet("my friend"));

const multiplyBy4 = (input) => {return input * 4};
console.log(multiplyBy4(10));

const multiplyBy5 = num => num*5
console.log(multiplyBy5(10))

function copyArrayAndManipulate(array, instructions){
    const output = [];
    for (let i = 0; i < array.length; i++){
        output.push(instructions(array[i]));
    }
    return output;
}

const result = copyArrayAndManipulate([1,2,3], multiplyBy2);
console.log(result);

const result2 = copyArrayAndManipulate([1,2,3], (input) => {return input * 2})
console.log(result2)
