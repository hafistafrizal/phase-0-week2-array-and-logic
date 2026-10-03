// ## Soal 1

/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let positionO = [];
    let positionX = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "o") {
            positionO.push(i);
            
            // console.log(`Masuk "o": ${i}`)
        } else if (arr[i] === "x") {
            positionX.push(i)

            // console.log(`Masuk "x": ${i}`)
        }
    }

    if (positionX.length === 0) {
        return 0
    }

    // console.log(positionO)
    // console.log(positionX)

    let jarakTerdekat = Infinity
    for (let i = 0; i < positionO.length; i++) {
        for (let j = 0; j < positionX.length; j++) {
            let posisi = positionO[i] - positionX[j];
            // console.log(`hasil: ${positionO[i]} - ${positionX[j]} = ${posisi}`)

            let selisih = Math.abs(posisi)
            // console.log(`selisih: ${selisih}`)

            if (selisih < jarakTerdekat) {
                jarakTerdekat = selisih;
            }
        }
    }

    return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1