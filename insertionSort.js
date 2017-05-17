function insertionSort(arr){ //start function
  for(i = 1; i< arr.length; i++){ 
    newValue = arr[i];
    j = i;
    while(j > 0 && arr[j - 1] > newValue ){
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = newValue; //swapping value
  }
  return arr;
}

myArray = [3, 2, 1, 5, 6]; //repalce it with the value you want
console.log("Before sorted : ["+" "+myArray.join(", ")+" ]");

var x = insertionSort(myArray);

console.log("After sorted : [ "+ x.join(", ")+" ]");
//check that here : https://repl.it/FjOf/0
//Sorry I am a Javascript noob who want to conquer to algorithms and programming 
//follow me for more tips and tricks
//train your array skill everyday, array is trickiest villain in the world

//I will update with bubble sort
