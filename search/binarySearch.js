const arr = [1, 2, 3, 4, 4, 5, 6, 7];

export const binarySearch = (list, target) => {
    let left = 0;
    let right = list?.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (list[middle] < target) {
            left = middle + 1;
        } else if (list[middle] > target) {
            right = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}
export const recursiveBinarySearch = (list, target, left, right) => {
    if (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (list[middle] == target) {
            return middle;
        } else if (list[middle] > target) {
            return recursiveBinarySearch(list, target, left, middle - 1);
        } else {
            return recursiveBinarySearch(list, target, middle + 1, right);
        }
    }
    return -1;
};

console.log(`search 4`, binarySearch(arr, 4));
console.log(`recursive search 4`, recursiveBinarySearch(arr, 4, 0, arr.length));
console.log(`recursive search 2`, recursiveBinarySearch(arr, 2, 0, arr.length));
console.log(`recursive search 3 (length=1)`, recursiveBinarySearch([3], 3, 0, 0));

