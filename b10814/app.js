const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

//console.log(input);

solution(input);

function solution(A) {
  let testCount = +A[0];
  let results = "";
  //console.log(A);
  A.shift();
  //console.log(A);
  const listFocusAge = new Array(201);
  //console.log(listFocusAge);
  input.map((item) => {
    const splited = item.trim("\r").split(" ");
    //console.log(splited);
    const age = parseInt(splited[0]);
    //console.log(age);
    if (listFocusAge[age] === undefined) {
      listFocusAge[age] = [];
    }
    listFocusAge[age].push([age, splited[1]]);
    //console.log(listFocusAge[age]);
  });
  listFocusAge.map((list) => {
    //console.log(list.length);
    for (let i = 0; i < list.length; i++) {
      results += `${list[i][0]} ${list[i][1]}\n`;
    }
  });
  console.log(results);
}
