/**
 * we choose a pivot and rearrange the array such that the elements lesser then the pivot placed to the left and the 
 * ones greater than the element will be placed at the right, and repeat the process for the left side and the right side
 * till the array is sorted
 * O(n*Log(n)) complexity
 */

const swap = (arr, firstIndex, secondIndex) => {
    [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]]
}

function pivotHandler(arr, start = 0, end = arr.length) {
    let pivot = arr[start];
    let pivotIndex = start;
    for (let i = start + 1; i < end; i++) {
        if (pivot > arr[i]) {
            pivotIndex++;
            swap(arr, i, pivotIndex)
        }
    }
    swap(arr, start, pivotIndex)
    return pivotIndex;
}
function quickSort(arr, left = 0, right = arr.length) {
    if (left < right) {
        let pivotIndex = pivotHandler(arr, left, right);
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
        return arr
    }
}
console.log(quickSort([5, 2, 8, 3, 4]))