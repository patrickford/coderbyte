function combinations(nums) {

  var combi = [];
  var temp= [];
  var len = Math.pow(2, nums.length);

  for (var i = 0; i < len ; i++){
      temp = [];
      for (var j=0; j < nums.length; j++) {
        console.log("i = " + i);
        console.log("j = " + j);
        console.log("Math.pow(2,j) = " + Math.pow(2,j));
        console.log("i & Math.pow(2,j) = " + (i & Math.pow(2,j)));
        console.log("-------------------------------------");
          if ((i & Math.pow(2,j))){ 
              temp.push(nums[j])
          }
      }
      if (temp !== []) {
          combi.push(temp);
      }
  }
  return combi;
}

function additionArray(arr) {
  var max = arr.sort(function(a,b) {return a -b}).pop();
  var comb = combinations(arr);

  for (var i = 0; i < comb.length; i++) {
    var sum = 0;
    for (var j = 0; j < comb[i].length; j++) {
      sum += comb[i][j];
    }
    if (sum == max) {
      return true;
    }
  }
  return false;
}

