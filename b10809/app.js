const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString();

//console.log(input);

solution(input); //받는 값이 3개입니다

function solution(A) {
  const Arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
  //console.log(Arr);
  //console.log("a".charCodeAt());
  for (let i = 0; i < 26; i++) {
    console.log(A.indexOf(Arr[i])); //  indexOf는 A의 입력값 : beakjoon .에서의 Arr[i] = a,b,c,de ... 알파벳이 존재한다면 존재하는 곳의 위치. 순서 를 알려주고 없다면 -1을 출력한다
    //console.log(Arr.indexOf(A[i]));
  }
}
