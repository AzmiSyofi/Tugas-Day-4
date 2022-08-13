/*
Ganjil atau Genap

Buatlah script untuk menentukan suatu angka merupakan bilangan ganjil atau genap.
 
Contoh:
Input: 43
Output: Ganjil

Input: 1032
Output: Genap
 */

function oddEven(num){
    if(num % 2 == 0){
        return "Genap";
    } else {
        return "Ganjil"
    }
}

console.log(oddEven(43));
console.log(oddEven(1032));