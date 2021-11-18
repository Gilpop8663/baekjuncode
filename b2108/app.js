const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n"); // split을 쓰면 시간초과로 오류가 납니다!

input = input.map((item) => +item.trim("\r"));

let valueArray = [];

for (let i = 1; i <= input[0]; i++) {
  valueArray.push(input[i]);
}

//console.log(valueArray);

sol(valueArray);

function sol(input) {
  let answer = "";
  const N = input.length;
  let sum = input.reduce((v, h) => v + h);
  answer += Math.round(sum / N) + "\n"; // 1.산술평균
  //console.log(answer);

  let numbers = input.sort((a, b) => a - b);
  //console.log(input);
  let cen = Math.floor(N / 2);
  //console.log(cen);
  //console.log(numbers[cen]);
  answer += `${numbers[cen]}\n`; // 2. 중앙값
  //console.log(answer);

  let map = new Map();
  //console.log(map);
  //console.log(numbers);
  let max = 1;
  for (let number of numbers) {
    if (map.has(number)) {
      max = Math.max(max, map.get(number) + 1);
      map.set(number, map.get(number) + 1);
    } else {
      map.set(number, +1);
    }
  }

  const maxArr = [];
  for (let [key, val] of map) {
    //console.log(val);
    //console.log(key);
    if (val === max) {
      maxArr.push(key);
    }
  }

  answer += maxArr.length === 1 ? `${maxArr[0]}\n` : `${maxArr[1]}\n`; // 3. 최빈값

  //console.log(answer);
  //console.log(max);
  //console.log(map);

  let range = numbers[numbers.length - 1] - numbers[0];
  //console.log(range);
  answer += range;
  console.log(answer);
}
