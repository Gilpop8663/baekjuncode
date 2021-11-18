const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

//console.log(input);

solution(input);

//방법 1 sort를 활용한 방법
function solution(A) {
  let remainder = []; //나머지를 배열안에 넣을 변수 설정
  let count = 0; // 나머지가 다른 개수를 셀 변수 설정
  let sexyNums = 1001; // 나머지끼리 비교하기 위한 변수 설정

  /* for in 을 사용하면 백준사이트에서 오류가 납니다
  for (let k in A) {
    // for in 활용
    //console.log(A[k], A.k, A);
    let Nums = A[k] % 42; // A[k]의 42 나머지 값을 구함
    remainder.push(Nums); // remainder 이라는 배열안에 넣어줌
  }
  */
  // 입력값이 10개가 주어지는 조건이 있으므로 i<10 을 해주었습니다.
  for (let i = 0; i < 10; i++) {
    let Nums = A[i] % 42;
    remainder.push(Nums);
  }

  remainder.sort(); // 비교하기 위해서는 sort () 정렬 함수를 사용해야했습니다.
  //console.log(remainder);
  for (let i = 0; i < 10; i++) {
    // 숫자는 10개가 주어진다고 하였습니다. 하지만 remainder.length 를 사용해도 되겠습니다.
    if (remainder[i] !== sexyNums) {
      // 나머지의[i] 값과 sexyNums 값이 다르면 나머지가 다르다는 걸 사용하였습니다.
      sexyNums = remainder[i]; // 나머지가 다를시 새로운 sexyNums를 remaidner[i]로 설정하였습니다.
      //console.log(sexyNums);
      count = count + 1;
    }
  }
  console.log(count);
}

/* 방법 2 indexOf 활용

function solution(A) {
  let remainder = []; //나머지를 배열안에 넣을 변수 설정
  let count = 0; // 나머지가 다른 개수를 셀 변수 설정
  for (let i = 0; i < 10; i++) {
    let Nums = A[i] % 42;
    remainder.push(Nums);
  }
  for (let i = 0; i < 42; i++) {
    if (remainder.indexOf(i) !== -1) {
      count++;
    }
  }
  console.log(count);
}
*/
