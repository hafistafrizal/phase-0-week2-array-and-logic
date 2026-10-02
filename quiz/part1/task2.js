// ## Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);

    let date = input[3].split("/");
    let month = date[1];
    let nameMonth = "";

    switch (month) {
        case "01": nameMonth = "Januari"; break;
        case "02": nameMonth = "Februari"; break;
        case "03": nameMonth = "Maret"; break;
        case "04": nameMonth = "April"; break;
        case "05": nameMonth = "Mei"; break;
        case "06": nameMonth = "Juni"; break;
        case "07": nameMonth = "Juli"; break;
        case "08": nameMonth = "Agustus"; break;
        case "09": nameMonth = "September"; break;
        case "10": nameMonth = "Oktober"; break;
        case "11": nameMonth = "November"; break;
        case "12": nameMonth = "Desember"; break;
        default: nameMonth = "Bulan tidak valid";
    }
    
    console.log(nameMonth);

    date.reverse();
    console.log(date);

    date.reverse();
    console.log(date.join("-"));

    console.log(input[1].slice(0, 15));
}

dataHandling(input);

