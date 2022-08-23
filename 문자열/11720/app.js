const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => item);
solution(input[0], input[1]);

function solution(A, B) {
    let sum = 0;
    for(let i = 0; i <A; i++){
        sum += +B[i]
    }
    console.log(sum)
}