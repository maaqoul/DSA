/**
 * it starts scanning the array to find the minimum value than swap it with the position it started from:
 * let's take this unsorted array for example : [59, 35, 40, 27, 17, 97]
 * the first scan will start from index 0 assuming it is the minimum value till it finds a smaller value - 59 > 40 > 35 > 27, 17
 * so 17 is the smallest value in the first iteration, the result will be [17, 35, 40, 27, 59, 97], now will start from the second position which is 35 > 27
 * let s swap them [17, 27, 40, 35, 59, 97] and the algorithm goes on till there is no smaller value from the value in the position it started scanning from.
 * 
 * the sorted array : [ 17, 27, 35, 40, 59, 97 ]
 */

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimumIndex = i;
        let minimumValue = arr[i];
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < minimumValue) {
                minimumIndex = j;
            }
        }
        swap(arr, i, minimumIndex)
    }
    return arr;
}

console.log(selectionSort([59, 35, 40, 27, 17, 97]))