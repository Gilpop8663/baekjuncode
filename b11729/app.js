const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = +fs.readFileSync(filePath).toString();

//console.log(input);

let count = 0;
let answer = [];

// num : 원반의 개수
//from : 출발지 기둥 번호
//to : 목적지 기둥 번호
//other : 나머지 기둥 번호

function solution(num, from, other, to) {
  if (num === 0) {
    return;
  } else {
    solution(num - 1, from, to, other); // 받아온 원반 갯수보다 하나 적은 원반들을 목적지가 아닌 나머지 기둥으로 옮김
    //console.log(`${from}에서 ${to}로 이동`);
    answer.push([from, to]); //맨 아래 원반을 목적지로 이동
    count++;
    solution(num - 1, other, from, to); // 다른 곳으로 옮겼던 원반들을 그 위에 얹음
  }
}

solution(input, "1", "2", "3");
console.log(count);
answer = answer.map((item) => item.join(" ")).join("\n");
console.log(answer);
