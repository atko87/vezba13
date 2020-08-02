//1 fizz buzz zadaca

// for (var i=1; i < 20; i++){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }

// 2 zemajne na poslednio element od array

// var arr = ["sdsd", 1, 2, false, "stefanija"];
// var dolzina = arr.length;
// console.log(dolzina);

// //so dolzinata - 1 go zemame poslednio index ( posto ako ima dolzina 5, indekso posleden e sekogas 4 - posto pocnvuda broj od 0)
// var posledenElement = arr[arr.length - 1];
// console.log(posledenElement);


// 3 pecatejne na site elemeti od arr

// var arr = ["sdsd", 1, 2, false, "stefanija"];

// for(var i = 0;i < arr.length;i++) {
//     console.log(arr[i]);
// }

//4 da se ispecata prvita tri elementi od arr


//edno resenie
// var arr = ["sdsd", 1, 2, false, "stefanija"];

// for(var i = 0;i < arr.length;i++) {
//     if(i == 0) {
//         console.log(arr[i]);
//     }
//     if(i == 1) {
//         console.log(arr[i]);
//     }
//     if(i == 2) {
//         console.log(arr[i]);
//     }
// }

// vtoro resenie

// break pisuvame za da izlezi od lupata
// var arr = ["sdsd", 1, 2, false, "stefanija"];

// for(var i = 0;i < arr.length;i++) {
//     if(i == 3) {
//         break;
//     } else {
//         console.log(arr[i])
//     }
// }


// **** novi  SAMO ARRAY METHODS

//5  join - razdelba pomedzu elementite po nesto so ce go pisime vo join

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// console.log(fruits.join("-"));
// console.log(fruits.join(""));

// //ako sakame da dobijame "recenica" od array
// console.log(fruits.join(" "));


// 6 push - adnuvajne nov element vo array NA KRAJOT OD ARRA


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.push("Kiwi");
// console.log(fruits);

//7 trgajen na poslednio element odd array


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.pop();
// console.log(fruits);



// 8 shift - trgajen na prvio element odd array


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.shift();
// console.log(fruits);


// 9 unshift - adnuva nov element vo array NA POCETOKOT


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.unshift("nesto novo");
// console.log(fruits);


// 10 SPLICE - 


// 0,1 - pocni na prv index i od togas pocni so broejne za koj elementi da se zema

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.splice(0,1));
// console.log(fruits.splice(0,2));



// 11 da se proveri 
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_splice



// 12 konkatanacija - zdruzuvajne


// var arr1 = [1,2,3];
// var arr2 = [4,5,6];

// var zaedno = arr1.concat(arr2);
// console.log(zaedno);


// 13 slice za ponatamu



// **** SORTIRAJNE NA ARRAY - PODREDUVAJNE 


// 1 sortirajne na array so STRINGOVI PO AZUBUCEN RED

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());


// 2 prevrtuvajne na array vo obraten redosled


// var arr = [1,2,3];
// console.log(arr.reverse());


// 3 sortirajne sortirajne na array SO BROEVI od pomal nakaj pogolem

// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log(points);


// **** datum 

// 1 zemajne na segasnot vreme 
// var d = new Date();
// console.log(d);



// **** tipovi na lupi

// for
// while
// forEach - novio


// var numbers = [45, 4, 9, 16, 25];
// numbers.forEach(x => {
//     console.log(x);
// })



// **** drug nacin za da mozime da prajme conditional statements - switch

// - so if i else 
// var ime = "stefanija";
// if (ime) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// var ime = "stefanija";

// switch (ime) {
//     case ime:
//         console.log(true);
//         break;
//     default:
//         console.log(false);
// }



// // drug primer za switch

// //ova vrajca cel datum
// var datum = new Date();
// //den od datumo
// var denOdDatumo = new Date().getDay();
// console.log(denOdDatumo);

// // kaj array pocnuva se od 0
// //a kaj datumite vo nedelata - prvio den e nedela i zato vrajca nula
// // ako new Date().getDay(); vrati 1 znaci e ponedelnik itn


// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Nedela";
//     break;
//   case 1:
//     day = "Ponedelnik";
//     break;
//   case 2:
//     day = "Vtornik";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }

// console.log("Deneska e den: " + day);




// -- navrajcajne na ovie raboti 



// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log(points);


// array iteration
// regular expression


// var numbers = [45, 4, 9, 16, 25];
// numbers.forEach(x => {
//     console.log(x);
// })
