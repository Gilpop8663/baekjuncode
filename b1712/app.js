const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split(" "); // split을 쓰면 시간초과로 오류가 납니다!
input = input.map((item) => +item);

//console.log(input);

solution(input);

function solution(A) {
  let n = 0;
  //console.log(A[0] + A[1]);
  if (A[1] >= A[2]) {
    // 제조비용보다 판매비용이 똑같거나 비싸면 손익분기점은 존재할 수 없습니다.
    console.log(-1);
  } else { // 1000 70 170 이 예시라면  170- 70 = 100 1000 / 100 = 10 이므로 10대 팔았을때 본전이고 그 이후부터 손익분기점입니다.
    n = Math.floor(A[0] / (A[2] - A[1])); // 예시가 소수점일때 정답도 소숫점으로 나오기 때문에 내림 하였습니다.
    console.log(n + 1); // +1을 하여 손익분기점이 나오는 것을 구하였습니다.
  }
}
