// ## Soal 4
function tentukanDeretGeometri(arr) {
    let hasilBagi = arr[1] / arr[0];
    // console.log(`Hasil bagi: ${arr[1]} / ${arr[0]} = ${hasilBagi}\n`)
    
    for (let i = 1; i < arr.length; i++) {
        let hasilBagiNow = arr[i] / arr[i - 1];
        // console.log(`Geometri: ${arr[i]} / ${arr[i - 1]} = ${hasilBagiNow}`)

        if (hasilBagiNow !== hasilBagi) {
            return false;
        }
    }

    return true;

}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false