/**
 * we consider the 0th index to be sorted and start from 1th index and compare if its smaller than his previous adjacent element
 * then we swap it to the sorted area and continue swapping till its no longer the smallest
 * 
 * O(n`2) complexity 
 */

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let element = arr[i]; // element variable contains the data we intend on bringing over to the sorted area
        let j = i - 1; //j variable points to the index position of the last value in the sorted area
        while(j >= 0 && arr[j] > element) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = element
    }

    return arr;
}
                        
console.log(insertionSort([59, 35, 40, 27, 17, 97]))