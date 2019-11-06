let unSortedArray = new Array();
let tempArray = new Array();
let indexId = 0;
let toStrng = '0 |'
let  input= document.getElementById('input_text');//for every entered value getinput function runs onclick
let  dispDiv = document.getElementById("enterdArray");//div for the unsorted Array
let  dispBubble = document.getElementById('bubbsorted')//div for bubble sort
let  dispSelection = document.getElementById('selectionsorted')//div for Selection sort
let dispInsertion = document.getElementById('insertionsorted')//div for Insertion sort
let dispQuick = document.getElementById('quicklysorted')//div for Quick sort
let dispMerge = document.getElementById('mergesorted')//div for Merge sort
let cleardiv = document.getElementById('klear')
let sortresult = document.getElementById('sortresults')
let numsearch = document.getElementById('input_num')
let srchdiv = document.getElementById('searchdiv')
// enabling Enter key
input.addEventListener('keydown',function(event){
  if(event.key == 'Enter')
  getInput();
})

// enabling add button
function add(){
  getInput();
}
function toSearch(){
  sortresult.style.display = 'none'
  srchdiv.style.display = 'block'
}
function toSort(){
  sortresult.style.display = 'block'
  srchdiv.style.display = 'none'
}

//Adding input value to Unsorted Array
function getInput(){
  
  let Value = Number(input.value)// the value of each input
  
  cleardiv.style.display = 'block';

//adding a value to unsortedArray
    unSortedArray.push(Value + ' |')

    tempArray = [...unSortedArray]

   input.value = '';  //input field cleared
   
   let e ='' ; 
   for (let y=0; y<unSortedArray.length; y++)
   {
     e +=  ` ${unSortedArray[y]} ` 
   }
   dispDiv.innerHTML = e;   // then displayed in unsortedarray div
}
//the clear button
function clearAllArray(){
  unSortedArray.length = 0
 dispDiv.innerHTML =''  
}

// displays the sortedArray in the id div
function display(sortedArray,id){
  let e ='' ; 
   for (let y=0; y<sortedArray.length; y++)
   {
     e +=  ` ${sortedArray[y]} `
   }
   id.innerHTML = e;
}

//displaying bubbly sorted array
function bubblesort(){
  dispBubble.style.display= 'block'
    showIn = document.getElementById('BshowIt')
   sorted = Bubblesort(unSortedArray);
   display(sorted,showIn)
  }

//displaying selection sorted array
function selectionsort(){
  dispSelection.style.display= 'block'
  showIn = document.getElementById('SshowIt')
 sorted = SelectionSort(unSortedArray);
 display(sorted,showIn)
  }

//displaying insertion sorted array
function insertionsort(){
  dispInsertion.style.display= 'block'
  showIn = document.getElementById('IshowIt')
 sorted = InsertionSort(unSortedArray);
 display(sorted,showIn)
}

//displaying Quickly sorted array
function quicksort(){
  dispQuick.style.display= 'block'
  showIn = document.getElementById('QshowIt')
 sorted = QuickSort(unSortedArray,0,unSortedArray.length - 1);
 display(sorted,showIn)
}

//displaying Merge sorted array
function Mergesort(){
  dispMerge.style.display= 'block'
  showIn = document.getElementById('MshowIt')
 sorted = mergeSort(unSortedArray);
 display(sorted,showIn)
}
//swapping values in array by index
function swap(array,firstInPair,secondInPair){

  tempVar = array[firstInPair]
  array[firstInPair] = array[secondInPair]
  array[secondInPair] = tempVar

}

/*
 *               ***SORTING ALGORITHMS***
*/

//Bubble sort Algorithm
function Bubblesort(array){

    for( i=0;i < array.length; i++ ){
        //for every iteration one element is sorted thats why we subtract i in the nexsted loop
        for( j=0; j < array.length - i; j++){
            
            if(array[j] > array[j+1])
            swap(array,j,j+1)
        }
    }
    return array
}

//Selection Sort Algorithm
function SelectionSort(array){

  for(let i=0; i < array.length;i++){

      testIndex = i
    
      for(let j = i+1; j < array.length; j++){//it updates when ever it finds number less than the one at index i
          
          if(array[j] < array[testIndex])
          testIndex = j   
      }
      if(testIndex != i)
          swap(array,testIndex,i)  

  }
  return array
}

//insertion sort Algorithm
function InsertionSort(array){

  for(  i = 0; i < array.length; i++){
         
       testIndex =  i
      while(testIndex > 0 && array[testIndex] < array[testIndex - 1]){
          swap(array,testIndex - 1,testIndex);
          testIndex--;
      }
  }
  return array;
}

//Quick Sort Algorithm
function partition(array,low,high){

  pivotIndex = Math.floor((low + high) / 2)

  swap(array,pivotIndex,high)

  i = low;

  for(j=low; j < high; j++){
      if(array[j] <= array[high]){
          swap(array,i,j)
          i++;
      }
  }
  swap(array,i,high)

  return i;
}
//recursion
function QuickSort(array,low,high){

  if(low >= high)
  return

  pivotIndex = partition(array,low,high)

  QuickSort(array,low,pivotIndex - 1)
  QuickSort(array,pivotIndex +1,high)

  return array
}

//Merge sort Algorithm
function mergeSort (unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}
/**
 *                    SEARCHING ALGORITHMS
 */

 // Binary search

function measurePerformance(){
  let theNumber = Number(numsearch.value)
  let toStrng = String(theNumber + ' |')

  let starttym = Date.now(); 
   let inde = binary(tempArray, toStrng, 0, tempArray.length-1);
    let endtym = Date.now(); 
    let timeTaken = endtym - starttym;
   alert(`${inde} and Binary Search Algorithm has taken ${timeTaken} milliseconds to find it.`)
}

function binary(array, target, low, high){
	if(low > high){
		return -1;
	}
	let mid = Math.floor((low + high) / 2);
	if(array[mid] === target){
		return `${target} is at index ${mid}`;
	}
	if(array[mid] > target){
		return binary(tempArray, toStrng, low, mid-1);
	}
	else{
		return binary(tempArray, toStrng, mid+1, high);
	}
} 

// Direct Linear Saerch

function measurePerformanceDL() { 
  let theNumber = Number(numsearch.value)
  let toStrng = String(theNumber + ' |')
    let starttym = Date.now(); 
    let inde = directlinear(tempArray, toStrng, tempArray.length);
    let endtym = Date.now(); 
    let timeTaken = endtym - starttym; 
    console.log(timeTaken)
    alert(`${inde} and Direct Linear Search Algorihm has taken ${timeTaken} milliseconds to find it.`);
}

function directlinear(array, target, mylength){
	for(let i = 0;  i < mylength; i++){
		if(array[i] > target){
			return -1;
		}
		else if(array[i] === target){
			return `${target} is at index ${i}`;
		}
	}	
}

// Indirect Linear Search

function measurePerformanceIL() { 
  let theNumber = Number(numsearch.value)
  let toStrng = String(theNumber + ' |')
    let starttym = Date.now(); 
   let inde = undirectlinear(tempArray, toStrng, tempArray.length);
    let endtym = Date.now(); 
    let timeTaken = endtym - starttym; 
    alert(`${inde} and Indirect Linear Search Algorihm has taken ${timeTaken} milliseconds to find it.`);
}

function undirectlinear(array, target, mylength){
	for(let i = 0;  i < mylength; i++){
	    if(array[i] === target){
			return `${target} is at index ${i}`;
		}
	}	
} 