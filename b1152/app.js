const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString(); // split을 쓰면 시간초과로 오류가 납니다!

input = input.trim(); // 입력값의 앞 뒤 공백 제거

input = input.split(" "); // 공백을 기준으로 입력값을 배열로 나누어줌

//console.log(input);

solution(input);

function solution(A) {
  let count = 0; // 단어의 개수 변수 설정
  //console.log(A[0]);
  if (A[0] === "") {
    // 공백 1개로 이루어져있다면 count 값이 1이 되길래 if문으로 걸러주었다
    return console.log(count);
  }
  count = A.length; // 단어의 개수 length 활용
  console.log(count);
}
