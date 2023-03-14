//ada lima macam bentuk perulangan di javascript. secara umum, perulangan dibagi menjadi 2
// yaitu counted loop (terhitung) and uncounted loop (tak terhitung)
//perbedaannya:
//1. counted loop merupakan perulangan yang jelas dan sudah tentu banyak perulangannya
//2. uncounted loop merupakan perulangan yang tidak jelas berapa kali harus mengulang

//contoh
// function PushUp(){
//     //code
// }
// for(i = 0; i<10; i++){
//     PushUp();
// }


// let bosan;

// //contoh uncounted loop
// while(bosan == false){
//     PushUp();
// }

//macam macam perulangan counted loop
//1. perulangan For
//2. perulangan ForEach
//3. perulangan Repeat

//macam macam perulangan uncounted loop
//1. perulangan While
//2. perulangan Do/While

//1. perulangan FOR
//PERULANGAN for merupakan perulangan yang termasuk dalam counted loop, karena sudah jelas berapa kali akan mengulang sebuah perulangan.
//contoh

// for(let i = 0; i < 10; i++){
//     document.write(`<p>Perulangan ini berulang ${i + 1} kali</p>`)
// }

//1. perulangan WHILE

//perulangan while merupakan perulangan yang termasuk ke dalam perulangan uncounted loop namun, perulangan while juga dapat masuk atau menjadi perulangan counted loop dengan memberikan sebuah counter di dalamnya

//contoh
// var ulang = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// while(ulang){
//     var jawab = confirm("Apakah anda mau mengulang?");
//     counter++;
//     if(jawab == false){
//         ulang = false;
//     }
// }

// document.write("Perulangan sudah dilakukan sebanyak" + counter + "kali");

//2. perulangan Do/While
//perulangan do/while sama seperti perulangan while.

//perbedaannya adalah perulangan do/while akan melakukan perulangan sebanyak 1 kali terlebih dahulu lalu mengecek kondisi yang ada di dalam kurungb while

// do{
    //code
// }while(kondisi);

//contoh
// var ulang = confirm("apakah anda ingin mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("apakah anda mau mengulang?");
// }while(ulang);

// document.write("perulangan yang sudah dilakukan sebanyak " + counter + "kali");

// let sum = "";
// while(true){
//     let value = prompt("Lagi ape ?", '');
//     if(!value) break;
//     sum+= value;
// }

// alert(`sum : ` + sum);

// 4. perulangan FOREACH
//perulanga foreach biasanya digunakan untuk mencetak item di dalam array
//perulangan ini termaasuk dalam perulangan counted loop, karena jumlah perulangannya akan ditentukan oleh panjang dari arrray.
//ada dua caara untuk menggunakan perulangan foreach\

//1. menggunakan for dengan operator in 
//2. menggunakan method forEach()

//contoh
// let bahasa = ["Javascript", "Java", "Objective-c", "Python"];
// for (let i = 0; i < bahasa.length; i++){
//     document.write(`${i + 1}.${bahasa[i]}<br/>`);
// }

// //perulangan for menggunakan operator in
// let bahasaPemrograman = ["Javascript", "Java", "Objective-c", "Python"];
// for (let i in bahasaPemrograman){
//     document.write(`${i}.${bahasaPemrograman[i]}<br/>`);
// }

//contoh menggunakan perulangan forEach();

// let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]; //ini array
// hari.forEach(function (hari) {
//     document.write(`<h1>${hari}</h1>`);
// });



//5. perulangan dengan method repeat()
//perulangan dengan menggunakan method atau fungsi repeat() termasuk dalam perulangan counted loop

//fungsi ini khusus untuk mengulang sebuah teks (string);

// for (let i = 0; i <10; i++){
//     document.write(`Ulangi kalimat ini! <br>`);
// }

// document.write(`ulangi! <br>`.repeat(10));

//perulangan nested (bersarang)
//nested loop adalah perulangan bersarang (perulangan di dalam perulangan)

//contoh
// var ulang = confirm("apakah anda ingin mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("apakah anda mau mengulang?");
// }while(ulang);

// document.write("perulangan yang sudah dilakukan sebanyak " + counter + "kali");

// let hari = [1, 2, 3, 4, 5, 6, "minggu"]; //ini array
// hari.forEach(function (hari) {
//     document.write(`<h1>${hari}</h1>`);
// });


// for (let i = 0; i < 5; i++){
//     for (let j = 0; j < 5; j++){
//         document.write(`<p>Perulangan ke- ${i}, ${j} </p>`)
//     } 
// }

// var ulang = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// while(ulang){
//     counter;
//     var bintang = "*".repeat(counter) + "<br>";
//     document.write(counter + ": " + bintang);
//     ulang = confirm("Apakah anda ingin mengulang?");
// }


// function kali(a, b){
//     console.log(`Nilai pertama = ${a}`);
//     console.log(`Nilai kedua = ${b}`);
//     return a * b;

// }

// nilai1 = parseInt(prompt("Masukkan niali pertama : "));
// nilai2 = parseInt(prompt("Masukkan niali kedua : "));
 
// var coba = kali(nilai1, nilai2);
// console.log(coba);

//function declaration (penempatan bisa di mana saja)

// function tampilPesan(nama){
//     alert("Halo" + nama);
// }

//function expression (harus dideklarasikan terlebih dahulu)
// var tampilPesan = function(nama){
//     alert("Halo " + nama);
// };

// tampilPesan("Saviero");

// let arr = ["Saviero", "Gilbert", 3, 88];

//join mengubah isi array menjadi string

//push & pop = menambah dan menghapus elemen array 

// arr.push("Hain", 6);

// console.log(arr.join(" - "));

// arr.pop();
// console.log(arr);

//unshift & shift = menambah dan menghapus pada awal array

// arr.unshift("Dobi");
// console.log(arr.join( ", " ));


//splice = menyambung dan memotong array 

// arr.splice(2, 2, "Brahms", "Taki");
// // arr.splice(2, 3, "Bahro" );
// console.log(arr.join(", "));

//slice = mengiris array
//slice(awal, akhir);
// var arr2 = arr.slice(0,2);
// console.log(arr);
// console.log(arr2);

// var a = [1, 2, 3, 4, "a", "b", "c", "d"];
// var a2 = 

//Method Filter 
//method filter() berfungssi untuk menyaring data di array 
//paarameter yang harus diberikan pada method filter() sa,a seperti forEach(), yaitu sebuah fungsi callback.

// const angka = [1,2,3,4,5,6,7,8,9];
// const filterArr = angka.filter ((item) => {
//     return item % 2 == 1;
// });
// console.log(filterArr);

//arrrow function
//const angka = () => {

//}

//object di dalam array
// const users = [{
//     Nama: `Doki`,
//     Umur: `23`,
//     Gender: `female`
// },
// {
//     Nama: `Kiba`,
//     Umur: `19`,
//     Gender: `male`
// },
// {
//     Nama: `Bety`,
//     Umur: `54`,
//     Gender: `female`
// }];

// const usersFemale = users.filter( (users) => users.Gender === `female`);
// console.log(usersFemale);

const mobil = [{
    merk: `BMW i8`,
    fuel: `gasoline`,
    type: `hybrid sports car`
},
{
    merk: `Lexus lc`,
    fuel: `electric`,
    type: `hybrid sports car`
},
{
    merk: `Dodge Charger`,
    fuel: `gasoline`,
    type: `muscle car`
}];

let gas =prompt("Tipe bahan bakar :");
const mobilFuel = mobil.filter( (mobil) => mobil.fuel === gas);
console.log(mobilFuel);

