function additionArray2(nums) {
  var max = nums.sort(function(a,b) {return a - b}).pop();
  var combination = [];
  var len = Math.pow(2, nums.length);
  var sum = 0;

  for (var i = 0; i < len ; i++){
      combination = [];
      for (var j = 0; j < nums.length; j++) {
          if ((i & Math.pow(2,j))){ 
              combination.push(nums[j])
          }
      }

      sum = 0;
      for (var k = 0; k < combination.length; k++) {
        sum += combination[k];
      }
      if (sum == max) {
        return true;
      }
  }
  return false;
}


