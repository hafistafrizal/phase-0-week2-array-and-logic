// ## Soal 3

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    animals.sort();
    let result = [ [animals[0]] ];

    for (let i = 1; i < animals.length; i++) {
        // let animalsNow = animals[i];
        // let hurufDepanNow = animalsNow[0];
        // console.log(`animal sekarang ${animalsNow}`);
        // console.log(`animal sekarang ${hurufDepanNow}`);

        if (animals[i][0] === animals[i - 1][0]) {
            result[result.length - 1].push(animals[i])
            // result.push( [animalsNow] )
            // console.log(`Kelompok hewan baru: ${animalsNow}`)
        } else {
            result.push([[animals[i]]])
            // let kelompokLast = result[result.length - 1];
            
            // let animalsAcuan = kelompokLast[0];
            // let hurufDepanAcuan = animalsAcuan[0];

            // console.log(`kelompok terakhir  : ${kelompokLast}`);
            // console.log(`animals Acuan      : ${animalsAcuan}`);
            // console.log(`huruf depan acuan  : ${hurufDepanAcuan}`);

            // if (hurufDepanNow === hurufDepanAcuan) {
            //     kelompokLast.push(animalsNow);
            //     // console.log(`hewan sekarang: ${animalsNow} digabungkan dengan ${animalsAcuan}`);
            // } else {
            //     result.push( [animalsNow] );
            //     // console.log(`Hewan beda buat kelompok baru ${animalsNow}`);
            // }
        }
    }
    return result;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]