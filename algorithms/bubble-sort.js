function bubbleSort(arr) {
    let swapped = true; // this is a sentinel

    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1] < arr[i]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
    }
    return arr
}
console.log(bubbleSort([1, 15, 0, 9, 8, 6, 75, 546, 10, 57]))