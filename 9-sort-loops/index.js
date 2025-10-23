function sort(arr, direction) {
    switch (direction) {
        case 'ASC':
        case 'DESC':
            return bubbleSort(arr,  direction);
        default:
            return 'Unknown direction';
    }
}

function bubbleSort(arr, direction) {
    let tmp;
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = 0; j < arr.length - 1; ++j) {
            if ((arr[j] < arr [j + 1] && direction === 'DESC') || (arr[j] > arr [j + 1] && direction === 'ASC')) {
                tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}


const arr = [1, 40, -5, 10, 0]
console.log(sort(arr, "ASC"))
console.log(sort(arr, "DESC"))