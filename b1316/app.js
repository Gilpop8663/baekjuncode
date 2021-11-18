const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n"); // split을 쓰면 시간초과로 오류가 납니다!

let testCount = +input[0]; // 실행횟수

//console.log(testCount);

solution(input);

function solution(A) {
  let array = []; // 각 줄의 문자를 넣을 배열 설정
  let count = 0; //중복되는 문자 확인할 변수
  let answer = 0; // 답에 해당하는 변수;
  for (let i = 1; i < A.length; i++) {
    numArray = []; // 각줄 마다 실행되기 위해 초기화 ; 중복되는 문자 확인할 변수;
    //console.log(A[i]);
    for (let k = 0; k < A[i].length; k++) {
      array.push(A[i][k]); // 각 문자를 array에 넣어준다
    }
    //console.log(array);
    array = Array.from(new Set(array)); // set 는 중복되는 문자를 없애준다.
    //console.log(array);
    for (let m = 0; m < array.length; m++) {
      let position = A[i].indexOf(array[m]); // 처음으로 등장하는 문자열의 순서
      numArray.push(position); // NumArray 에 넣어줍니다.
      while (position !== -1) {
        // -1이 아니라면 존재한다는 의미이니 position +1 의 순서를 통해 다음 순서도 구해줍니다
        position = A[i].indexOf(array[m], position + 1);
        //console.log(position);
        if (position !== -1) {
          // position이 -1이라면 position+1의 문자가 존재 하지 않을 때를 없앴습니다.
          numArray.push(position); // numArray에 중복되는 문자의 순서들 넣었습니다.
        }
      }
    }
    for (let y = 0; y < numArray.length - 1; y++) {
      // numArray의 [y] - [y+1] 의 값이 -1 이 아니라면 3번째 , 5번째 8번째 등 순서대로 있지 않다는 의미입니다. 1,2,3  1-2 , 3-2 는 -1
      if (numArray[y] - numArray[y + 1] !== -1) {
        count++;
      }
      //console.log(count);
    }
    if (count !== 0) {
      // 카운트가 0이 아니라면 문자가 띄엄띄엄 있다는 의미입니다 . answer에 +1을 해주었습니다
      answer += 1;
      count = 0; // 초기화
    }

    //console.log(numArray);
    array = []; // array 각 줄마다 실행되기 위해 초기화
  }
  console.log(testCount - answer); // 총 실행한 횟수 - 중복된 횟수 = 그룹단어
}
