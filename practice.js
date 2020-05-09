//******VERY EASY

function returnSum(arr){
  var sum = 0;
  for(var i = 0; i<arr.length;i++){
      sum += arr[i];
  }
  console.log(sum);
}

returnSum([5,6,7,8,9]);

function minToSec(min){
  var sec = min * 60;
  console.log("There are " + sec + " seconds in " + min + " minutes.");
}
minToSec(100);

function nextNum(num){
  var nextNum = num + 1;
  console.log("The number after "+ num + " is " + nextNum);
}
nextNum(5);

function triangleArea(base, height){
  var area = (base * height)/2;
  console.log(area);
}
triangleArea(5,5);

function getFirstElement(arr1){
  console.log(arr1[0]);
}
getFirstElement([100,2,3,4]);

// *********EASY

function addUpFromSingle(num){
  var sum = 0;
  for(var i =0; i <= num; i++){
    sum += i;
  }
  console.log(sum);
}
addUpFromSingle(4);

var arr1 = [10, 2 , 4, 5];
function findTheSmall(arr){
  var s;
  var first = 0;
  var last = arr.length-1;
  while(first !== last){
    if(arr[first] < arr[last]){
      s = arr[first];
      last -= 1;
    }
    else{
      s = arr[last];
      first += 1;
    }
  }
  console.log('smallest: ' + s ); 
}
function findTheBig(arr){
  var b;
  var first = 0;
  var last = arr.length-1;
  while(first !== last){
    if(arr[first] > arr[last]){
      b = arr[first];
      last -= 1;
    }
    else{
      b = arr[last];
      first += 1;
    }
  }
  console.log('biggest: ' + b ); 
}

findTheBig(arr1);
findTheSmall(arr1);

function sortArray(arr){
  var first = 0;
  var last = arr.length -1;
  while(first !== last){
    if(arr[first] > arr[last]){
      var a = arr[first];
      arr[first] = arr[last];
      arr[last] = a;
      first += 1;
    }
    else{
      last -= 1;
    }
  }
  console.log(arr);
}


sortArray(arr1);


function swap(arr, a, b){
  var first = arr[a];
  arr[a] = arr[b];
  arr[b] = first;
  console.log(arr);
}

swap(arr1,2,1);



// ******MEDIUM

var obj = {a: 1, b:2, c:3};
function iterate(){
  for(var property in obj){
    console.log(property + ':' + obj[property]);
  }
}

iterate(obj);

var obj1 = {prabh: 24, harpreet: 18, ks: 53, hg: 52};
function agify(obj, num){
  for(var prop in obj){
    var updatedAge = obj[prop] + num;
    console.log(prop + ':' + updatedAge);
  }
}
agify(obj1, 2);

