const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => item.trim("\r"));

//console.log(input);

solution(input);

function solution(A) {
  //console.log(A[1].charCodeAt(0));
  let wordArr = [];
  for (let i = 0; i < A.length; i++) {
    //A[i] = +A[i];
    //console.log(A[i]);
    if (A[i].charCodeAt(0) > 60 && A[i].charCodeAt(0) < 123) {
      wordArr.push(A[i]);
    }
  }
  //console.log(wordArr);
  let set = new Set(wordArr);
  //console.log([...set]);
  /*[...set] = [...set].sort((a, b) => {
    if (a.length === b.length) {
      return 0;
    } else return a.length - b.length;
  });
  */
  [...set] = [...set].sort().sort((a, b) => a.length - b.length);
  console.log(set.join("\n"));
}
