function sort(arr) {
    const length = arr.length;
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--)
        heapify(arr, length, i);
    for (let i = length - 1; i > 0; i--) {
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}

function heapify(arr, N, i) {
    let largest = i; // Initialize largest as root
    const l = 2 * i + 1; // left = 2*i + 1
    const r = 2 * i + 2; // right = 2*i + 2

    if (l < N && arr[l] > arr[largest])
        largest = l;

    if (r < N && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        const swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        heapify(arr, N, largest);
    }
}

function printArray(arr) {
    const N = arr.length;
    for (let i = 0; i < N; ++i)
        console.log(arr[i] + " ");
}
const arr = [12, 11, 13, 5, 6, 7];
const N = arr.length;

sort(arr);

console.log('Sorted array is :');
printArray(arr, N);
