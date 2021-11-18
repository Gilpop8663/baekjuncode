const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = +fs.readFileSync(filePath).toString(); // split을 없앴습니다.

//console.log(input);

solution(input);

function solution(A) {
  let n = 0;
  let m = 0;
  let sum = 4897465468;

  if (A % 5 === 0) {
    // A 가 5로 나누어질 때
    n = Math.floor(A / 5);
    sum = n;
  } else {
    for (let i = 1; i < A / 5; i++) {
      // A/5로 나눈 값만큼 실행
      m = 9876541654;
      n = 41564894765;
      if ((A - i * 5) % 3 === 0) {
        // A - 5 ,10,15,20,25...  % 3 이 0일 때
        i > 0 ? (n = i) : -1;
        Math.floor((A - i * 5) / 3) > 0
          ? (m = Math.floor((A - i * 5) / 3))
          : -1;
        sum > m + n ? (sum = m + n) : -1; // sum 이 최솟 값일 때 sum 갱신
        //console.log("두번쨰", m, n);
      }
    }
  }
  if (sum > 4897465460) {
    A % 3 === 0 ? (sum = A / 3) : -1;
  }
  sum > 4897465460 ? console.log(-1) : console.log(sum);
}
