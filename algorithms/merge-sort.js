/**
 * the merge sort basically splits in half the array to left side and right side, then compares the two sides and merge them 
 * 
 * O(n*Log(n)) complexity
 */

const merge = (left, right) => {
    const output = [];
    let i = 0;
    let j = 0;
    const leftLength = left.length;
    const rightLength = right.length
    while (i < leftLength && j < rightLength) {
        if (left[i] < right[j]) {
            output.push(left[i])
            i++;
        } else {
            output.push(right[j])
            j++;
        }
    }

    while (i < leftLength) {
        output.push(left[i])
        i++
    }

    while (j < rightLength) {
        output.push(right[j])
        j++;
    }

    return output;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right)
}

console.log(mergeSort([59, 35, 40, 27, 17, 97]))