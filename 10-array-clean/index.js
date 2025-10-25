function clean (arr, predicate) {
    let newArr = [];
    for (const el of arr){
        if (!predicate(el))
            newArr.push(el);
    }
    return newArr;
}

const predicate = x => x > 5;
const arr = [3, 6, 9, 2];
console.log(clean(arr, predicate));