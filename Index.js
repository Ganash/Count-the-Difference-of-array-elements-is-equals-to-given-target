var list1 = [1,2,3,4];
var target = 1;
var count = 0;
var i,j, temp;
var lenn = list1.length;
console.log(lenn);

for (i = 0; i < lenn; i++){

  for(j = 0; j < lenn; j++){

    if(list1[j] < list1[j+1]){

      temp = list1[j];
      list1[j] = list1[j+1];
      list1[j+1] = temp

    }
  }
}

for(i = 0; i < lenn; i++){

  for(j = 0; j < lenn; j++){

    if(list1[j] - list1[j+1] == target){

      console.log(list1[j] + " " + list1[j+1])

      count++;

    }
  }
  break;
}
console.log(list1)
console.log(count)