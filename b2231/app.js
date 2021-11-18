const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = +fs.readFileSync(filePath).toString(); // split을 쓰면 시간초과로 오류가 납니다!

//console.log(input);

solution(input);

function solution(A) {
  //A = A.toString()
  // .split("")
  // .map((item) => +item);
  //console.log(A[0] + A[1] + A[2]);
  let answer = 756657467684;
  for (let i = 0; i <= A; i++) {
    let sum = 0;
    i = i
      .toString()
      .split("")
      .map((item) => +item); // i 를  2, 1 6 이렇게 각각의 숫자를 가진 배열로 만드는 과정
    for (let k = 0; k < i.length; k++) {
      sum = sum + i[k]; // 각각의 숫자의 합
    }
    i = +i.join("");
    //console.log(i + sum);
    if (i + sum === A && answer > i) {
      // i + sum 이 A 이고 answer 이 i보다 작은 최저값이여야함
      answer = i;
    }
    //console.log(i);
  }
  if (answer > 1000000000) {
    // asnwer이 없다면 0으로 출력
    answer = 0;
  }
  console.log(answer);
}
