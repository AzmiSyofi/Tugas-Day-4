/*
Grade

Buatlah script untuk menentukan suatu nilai dengan ketentuan berikut:

    Jika nilai yang dimasukkan lebih besar dan sama dengan 90 maka output yang keluar adalah A.
    Jika nilai yang dimasukkan lebih besar dan sama dengan 80; dan lebih kecil dan sama dengan 89, maka output yang keluar adalah B.
    Jika nilai yang dimasukkan lebih besar dan sama dengan 70; dan lebih kecil dan sama dengan 79, maka output yang keluar adalah C.
    Jika nilai yang dimasukkan lebih besar dan sama dengan 60; dan lebih kecil dan sama dengan 69, maka output yang keluar adalah D.
    Jika nilai yang dimasukkan lebih kecil dan sama dengan 59 maka output yang keluar adalah E.

Contoh:
Input: 30
Output: E

Input: 75
Output: C
*/

function grade(value){
    if(value >= 90) {
        return "A";
    } else if (value >= 80 && value <= 89) {
        return "B";
    } else if (value >= 70 && value <= 79) {
        return "C";
    } else if (value >= 60 && value <= 69) {
        return "D";
    } else {
        return "E";
    }
}

console.log(grade(30));
console.log(grade(75));
