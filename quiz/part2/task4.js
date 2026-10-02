// ## Soal 4
function pasanganTerbesar(num) {
    let terbesarNum = 0;
    let strNum = String(num);

    for (let i = 0; i < strNum.length; i++) {
        let pasanganNum = Number(strNum[i] +strNum [i + 1]);

        if (pasanganNum > terbesarNum) {
            terbesarNum = pasanganNum;
        }
    }

    return terbesarNum;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
