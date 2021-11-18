const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item.trim("\r"));

//console.log(input);
let valueArray = [];
for (let m = 1; m <= input[0]; m++) {
  valueArray.push(input[m]);
}
//console.log(valueArray);

countingSort(valueArray, input[0]);

function countingSort(array, k) {
  var count = [],
    result = [];
  let answer = "";
  for (var i = 0; i < k; i++) {
    // 모든 숫자의 개수를 일단 0으로 초기화합니다.
    count[i] = 0;
  }
  //console.log(count, result, array.length);
  //console.log(array);
  for (var j = 0; j < array.length; j++) {
    // 숫자의 개수를 세어 저장합니다.
    // console.log(array[j]);
    count[array[j]] += 1;
  }

  //console.log(count, result, k);
  for (i = 0; i < k; i++) {
    // 누적합을 구합니다.
    count[i + 1] += count[i];
  }
  //console.log(count, result);
  for (j = 0; j < array.length; j++) {
    // 누적합이 가리키는 인덱스를 바탕으로 결과에 숫자를  집어넣습니다.
    //console.log(array[j], count[array[j]] - 1);
    result[count[array[j]] - 1] = array[j];
    count[array[j]] -= 1;
  }
  // console.log(result);
  for (let n = 0; n < result.length; n++) {
    answer += result[n] + "\n";
  }
  console.log(answer);
}
