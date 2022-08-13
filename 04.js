/*
Kabisat

Buatlah script untuk menentukan suatu tahun merupakan tahun kabisat atau bukan.

Contoh:
Input: 1900
Output: Bukan kabisat

Input: 2000
Output: Kabisat

Input: 2001
Output: Bukan kabisat

Input: 2016
Output: Kabisat
*/

function kabisat(year){
    if(year % 4 == 0){
        return "Kabisat"
    } else {
        return "Bukan Kabisat"
    }
}

console.log(kabisat(2000));
console.log(kabisat(2001));
console.log(kabisat(2016));
