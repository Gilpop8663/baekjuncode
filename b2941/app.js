const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString();

//console.log(input);
solution(input);

function solution(A) {
  let croatia = []; // 알파벳 배열
  let count = 0; // 단어의 수를 알려줄 변수
  let change = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]; // 변환될 크로아티아 알파벳 배열들
  croatia = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97)); // 알파벳 배열

  for (let k = 0; k < change.length; k++) {
    //k가 변환될 change 변수의 숫자만큼 반복한다.
    croatia.push(k); // croatia 배열안에 k를 추가한다.
    //console.log("k문" + k);
    for (let n = 0; n < A.length; n++) {
      // 입력값의 문자 개수 만큼 반복한다.
      A = A.replace(change[k], k); // 입력값의 크로아티아 문자들을 0~7까지로 변환시킨다.
    }
  }

  // console.log(change[0]);
  /*
  for (let m = 0; m < A.length; m++) {
    A = A.replace(change[0], 0);
    A = A.replace(change[1], 1);
    A = A.replace(change[2], 2);
    A = A.replace(change[3], 3);
    A = A.replace(change[4], 4);
    A = A.replace(change[5], 5);
    A = A.replace(change[6], 6);
    A = A.replace(change[7], 7);
  }
  */
  //console.log(croatia);
  //console.log(A);
  for (let i = 0; i < croatia.length; i++) {
    // croatia 배열의 숫자만큼 반복한다.
    let checkNum = A.indexOf(croatia[i]); // A안에 a-z ,크로아티아 알파벳이 존재하는지 여부를 변수로 한다.
    //console.log(croatia[i]);
    while (checkNum !== -1) {
      // -1이면 존재하지 않는것이고 -1이 아니면 존재하는 것.
      count++; // 존재하므로 1을 더해준다
      checkNum = A.indexOf(croatia[i], checkNum + 1); // 그리고 같은 문자가 여러개 있을수 있으므로 예를들어 a의 순서 +1 을해서 그다음 a도 찾아준다.
    }
    checkNum = 0; // 변수 초기화
  }

  console.log(count); // 정답 출력
}
