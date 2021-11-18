const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

// input = input.split(" ").map((item) => +item); //split을 없앤 이유는 입력값의 줄이 다르기 때문에 오류가 나서 없앴습니다.

input = input.map((item) => +item); // + item 은 자바스크립트가 +를 사용할 때 Number(item)과 동일한 기능을 해줍니다

// console.log(input);

let newArr = [];

const hundred = Math.floor(input[1] / 100); // 385 나누기 100  = 3.85 를 Math.floor를 이용하여 내림하여 3을 구하였습니다.
const ten = Math.floor((input[1] % 100) / 10); // 385 나머지 100  = 85 나누기 10 = 8.5 를 내림하여 8을 구하였습니다
const one = Math.floor(input[1] % 10); // 385 나머지 10 = 5 를 이용하였습니다.

// console.log(hundred, ten, one);
newArr.push(hundred);
newArr.push(ten);
newArr.push(one);

// console.log("새로운 배열" + newArr);

solution(input[0], input[1]);

function solution(A, B) {
  console.log(A * Math.floor(B % 10));
  console.log(A * Math.floor((B % 100) / 10));
  console.log(A * Math.floor(B / 100));
  console.log(A * B);
}
