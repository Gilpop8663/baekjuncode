const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

//console.log(input);

solution(input);

function solution(A) {
  let start = A[0]; // 시작 입력값
  let finish = A[1]; //끝 입력값
  let decimal = 0; // 소수
  let sum = 0; // 더하기
  let min = 153687468765487; // 최솟값
  for (let i = start; i <= finish; i++) {
    // i는 시작값 부터 마지막값까지 실행합니다
    let right = true;
    let n = 1;
    let howMany = 0;
    while (right) {
      if ((n === i) | (i === 1)) {
        // 입력값이 1이거나 n이 입력값과 같아지면 멈춥니다
        // n이 입력값과 같아지거나 입력값이 1일때 while문을 멈춤
        right = false;
        break;
      } else {
        if (Number.isInteger(i / n)) {
          // 나누어서 정수일때 howMany를 +1 해줍니다
          // n으로 나누었을 때 정수이면 howMany 를 +1해줌
          howMany++;
        }
        n++;
      }
    }
    if (howMany === 1) {
      // howMany가 1이면 자기자신만 나누어진다는 뜻이므로 소수임
      i !== 1 ? (sum += i) : ""; // i가 1이 아니라면 sum에 더해줍니다
      (i !== 1) & (min > i) ? (min = i) : ""; // i가 1이 아니고 min 보다 입력값이 작다면 최솟값을 바꾸어줍니다.
      decimal++; // 소수 개수 +1씩 해줍니다
    }
    //console.log(howMany);
  }
  if (decimal === 0) {
    // 소수가 없다면 -1을 출력
    console.log(-1);
  } else {
    console.log(sum);
    console.log(min);
  }
}
