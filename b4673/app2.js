function selfNumber(A) {
  let sum = 0;
  let allSum = 0;
  let numberArr = [];
  for (let k in A) {
    //console.log(A[k]);
    sum = sum + Number(A[k]);
  }
  allSum = Number(A) + sum;
  allSum = allSum.toString();
  //numberArr.push(+allSum);
  for (let i = 0; i < 594; i++) {
    sum = 0;
    for (let m in allSum) {
      sum = sum + Number(allSum[m]);
    }
    allSum = Number(allSum) + sum;
    allSum = allSum.toString();
    numberArr.push(+allSum);
  }
  return numberArr;
}

function removeItems(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

function solution() {
  let answer = [];
  let self;
  for (i = 1; i < 10000; i++) {
    answer.push(i);
  }
  for (j = 1; j < 9972; j++) {
    self = selfNumber(j);
    //console.dir(self, { maxArrayLength: null });
    for (k = 0; k < self.length; k++) {
      removeItems(answer, self[k]);
    }
  }
  console.dir(answer, { maxArrayLength: null });
}

solution();
