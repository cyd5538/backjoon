const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];
input = input.split(' ').map((item) => +item).sort((a,b) => a-b);


console.log(input[1])