// 1-masala
// satrni kiritish sifatida qabul qiladigan va shu satrning tekasri versiyasini qaytaradigan funksiya yozing.
// Misol uchun, agar kirish "hello" bo'lsa chiqish "olleh" bo'lishi kerak.

// let arrStr = "hello";

// function reverseWord(satr) {
//     let satrArr = satr.split("");

//     let teskariArr = satrArr.reverse();

//     let teskariSatr = teskariArr.join("");

//     return teskariSatr;
// }

// let result = reverseWord(arrStr);
// console.log(result);

// 2-masala
// Satrni kiritish sifatida qabul qilivuchi va qatordagi unlilar sonini (a, i, u, o, e) qaytaruvchi funksiya yozing.
// katta harflarga etibor bermang va katta va kichik unlilarni korib chiqing.

// let sentence = "JavaScriptda unlilar soni";
// function unlilarSoni(satr) {
//     let counter = 0;

//     let kichikSatr = satr.toLowerCase();

//     for (let i = 0; i < kichikSatr.length; i++) {
//       if (kichikSatr[i] == 'a' || kichikSatr[i] == 'i' || kichikSatr[i] == 'u' || kichikSatr[i] == 'o' || kichikSatr[i] == 'e') {
//         counter++;
//       }
//     }

//     return counter;
//   }

//   let res = unlilarSoni(sentence);
//   console.log(res);
  

// 3-masala
// Berilgan satr palindrom yoki yoqligini tekshiradigan funksiya yozing. palindrom - bu oldinga qarab orqaga qarab oqiladigan soz
// ibora yoki belgilar ketma ketligi. masalan "radar" - palindrom.

// function palindrom(satr) {
//   let Satr = satr.toLowerCase().replace();

//   let teskariSatr = Satr.split("").reverse().join("");

//   return Satr === teskariSatr;
// }

// console.log(palindrom("javascript"));
// console.log(palindrom("radar"));
// console.log(palindrom("alla"));

// 4-masala
// Gapni "satrni" kiritish sifatida qabul qiladigan shu gapdagi eng uzun sozni qaytaradigan funksiya yozing.
// agar maksimal uzunligi bir xil bolgan bir nechta soz bolsa, birinchisini qaytaring
// tinish belgilariga etibor bermang va so'zni bo'sh joy bo'lmagan belgilar ketma-ketligi deb hisoblang.

// let gap = "JavaScript";

// function uzunSoz(satr) {
//     let sozlar = satr.split();

//     let uzunSoz = "";

//     for (let i = 0; i < sozlar.length; i++) {
//       if (sozlar[i].length > uzunSoz.length) {
//         uzunSoz = sozlar[i];
//       }
//     }
  
//     return uzunSoz;
//   }
  
//   let res = uzunSoz(gap);
//   console.log(res);

// 5-masala
// Gapni (starni) kiritish sifatida qabul qiladigan va har bir sozning birinchi harfi
// bosh harf bilan yangi gapni qaytaradigan funksiya yozing.
// misol uchun agar kirish "salom dunyo" bolsa chiqish "Salom dunyo" bolishi kerak.

// let satr = "salom dunyo";

// function birinchiHarf(satr) {
//     let sozlar = satr.split();

//     for (let i = 0; i < sozlar.length; i++) {
//       if (sozlar[i].length > 0) {
//         sozlar[i] = sozlar[i][0].toUpperCase() + sozlar[i].slice(1);
//       }
//     }

//     return sozlar.join(" ");
//   }

//   let res = birinchiHarf(satr);
//   console.log(res);

// 6-masala
// Takrorlangan belgilar sonidan foydalanib, asosiy satrni siqishni bajaradigan funksiya yozing.
// Masalan "aabcccccaaa" qatori "a2b1c5a3" ga aylanadi.

// let asosiySatr = "accbbbbmkklll";
// function compression(satr) {
//   let siqishtirilganSatr = "";
//   let counter = 1;

//   for (let i = 0; i < satr.length; i++) {
//     if (satr[i] == satr[i + 1]) {
//       counter++;
//     } else {
//       siqishtirilganSatr += satr[i] + (counter > 1 ? counter : "");
//       counter = 1;
//     }
//   }

//   return siqishtirilganSatr;
// }

// let res = compression(asosiySatr);
// console.log(res);