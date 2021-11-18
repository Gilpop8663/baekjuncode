const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

//console.log(input.length);

solution(input);

function solution(A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = A[i].split(" ").map((item) => +item);

    A[i] = A[i].sort(function (f, s) {
      // 각 배열을 올림차순으로 정렬해준다.
      return f - s;
    });

    if (A[i][2] === 0) {
      // 입력값이 0일 때 멈춤
      break;
    }
    if (A[i][2] ** 2 == A[i][1] ** 2 + A[i][0] ** 2) {
      // 가장 긴 변의 제곱과  각 두변의 제곱의 합이 같으면 직각삼각형이다.
      console.log("right");
    } else {
      console.log("wrong");
    }
    //console.log(A[i]);
  }
}
