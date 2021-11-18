const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

//console.log(input);

solution(input);
/*
function solution(A) {
  let testCount = +A[0];
  let results = "";
  const array = [];
  A.shift();
  A[0] = A[0].split(" ").map((item) => {
    console.log(+item);
    item = +item;
  });
  console.log(A[0]);
  //console.log(numberArray);
  const sameDelete = new Set(A[0]);
  A[0].sort((a, b) => a - b);
  //console.log([...sameDelete]);
  //console.log(array);
  for (let i = 0; i < testCount; i++) {
    let xNum = array[i];
    let another = [...sameDelete].indexOf(xNum);
    //console.log(item);
    //console.log(xNum + "xnum");
    //console.log([...sameDelete]);
    //console.log(another + "어나더");
    //console.log(size);
    //console.log(xNum);
    //console.log(size.indexOf(xNum) + "순서");
    results += `${another} `;
  }
  //console.log(results);
  //console.log(array);
}
*/

function solution(A) {
  [n, x] = A;
  // console.log(n, x);
  x = x.split(" ").map((item) => +item);
  // console.log(x);

  let answer = [];
  const set = Array.from(new Set([...x])).sort((a, b) => a - b);
  const object = {};

  //console.log(set);
  set.forEach((item, idx) => (object[item] = idx));
  ///console.log(object);
  //console.log(x);
  for (let i = 0; i < x.length; i++) {
    answer.push(object[x[i]]);
  }
  //console.log(object[(999)[0]]);
  //console.log(answer);
  answer = answer.join(" ");
  console.log(answer);
}
