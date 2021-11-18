const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString(); // split을 쓰면 시간초과로 오류가 납니다!

//console.log(input);

solution(input);

function solution(A) {
  A = A.toLowerCase();
  let answer = [];
  let max = 0;
  let maxi = 0;
  let same = 0;
  let result = {};
  const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97)); // 알파벳 소문자 배열입니다.
  for (let k in A) {
    answer.push(A[k]); // 인풋값들의 내용을 answer이라는 배열안에 넣어서 정리합니다.
  }
  answer = answer.sort(); // a-z 순서대로 정리합니다
  //console.log(answer);
  answer.forEach((item) => {
    result[item] = (result[item] || 0) + 1; // answer의 각각의 내용들에 대해 result[item]에 +1씩 합니다
  });
  //console.log(result);
  //console.log(answer);
  for (let i = 0; i < arr.length; i++) {
    // 알파벳의 배열 수 만큼 i++ 해주고
    if (max < result[arr[i]]) {
      //result ={ a: 1, z: 2 } ,,arr[i]= a,z 등등 result[a]:1,result[2]:2 처럼 풀어나갔습니다.
      // max 값이
      // console.log(arr[i]);
      max = result[arr[i]]; // max값은 result[arr[i]] 으로 최댓값을 구한뒤
      maxi = i; // i가 몇번째엿는지도 저장해줍니다.
    } else if (max === result[arr[i]]) {
      // max 값과 result[arr[i]]가 같은 값이라고 한다면 max가 최댓값으로 정해진뒤 또다른 result[arr[i]]의 max 값이 같다는 것이므로  가장많이쓰인  문자가 중복으로 있다는 것으로 간주했습니다.
      same = result[arr[i]]; // same값으로 저장해줍니다
    }
  }
  //console.log(max);
  //console.log(maxi);
  //console.log(same);
  if (same === max) {
    // max와 same이 같다는 것은 중복이 있다는 것으므로 ?을 출력해줍니다.
    console.log("?");
  } else {
    console.log(arr[maxi].toUpperCase()); // arr[maxi]  maxi = 맥스값의 i 를 저장했었습니다. 그리고 대문자로 출력해야함으로 toUpperCase를 사용했습니다.
  }
}
