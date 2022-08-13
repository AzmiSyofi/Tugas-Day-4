/*
Film Rating

Buatlah script untuk menentukan rating suatu film, dengan ketentuan sebagai berikut:

    Jika usia yang dimasukkan lebih atau sama dengan 21, maka rating film adalah DEWASA.
    Jika usia yang dimasukkan lebih atau sama dengan 13, maka rating film adalah REMAJA.
    Jika usia yang dimasukkan lebih atau sama dengan 9, maka rating film adalah BIMBINGAN ORANG TUA.
    Jika usia yang dimasukkan kurang dari 9, maka rating film adalah SEMUA USIA.

Contoh:
Input: 15
Output: Remaja

Input: 32
Output: Dewasa

*/

function rating(usia){
    if(usia >= 21){
        return "Dewasa";
    } else if(usia >= 13){
        return "Remaja";
    } else if(usia >= 9){
        return "Bimbingan Orang tua";
    } else {
        return "Semua Usia";
    }
}

console.log(rating(15));
console.log(rating(32));