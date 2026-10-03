// ## Soal 3
//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
    let selisih = arr[1] - arr[0];
    // console.log(`\nselisih: ${arr[1]} - ${arr[0]} = ${selisih}\n`)

    // console.log(selisih);
    for (let i = 1; i < arr.length; i++) {
        let selisihNow = arr[i] - arr[i - 1]
        // console.log(`cek idx ke-${i}, (anka ${arr[i]})`);
        // console.log(` Hitung: ${arr[i]} - ${arr[i - 1]} = ${selisihNow}`);

        if (selisihNow !== selisih) {
            // console.log("Selisih Beda (return False)");
            return false;
        }
        // else {
        //     console.log("Selesih Sama (return True)");
        // }
    }
    return true;

}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false