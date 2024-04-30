console.log(" 45 question solve");
//Q2 //
var Name = "SANI";
console.log('hello', Name, "would u like to learn some python today?");
// Q3//
var personname = "sania";
console.log(personname.toLowerCase());
console.log(personname.toUpperCase());
console.log(personname.charAt(0).toUpperCase() + personname.slice(1).toLowerCase());
//Q4//
console.log("Muhammad Ali Jinnah", '"Expect the best, prepare for the worst." ');
//Q5//
var famousperson = "Muhammad ali jinnah";
var massage = '" expect tha best, prepare for tha worst." ';
console.log(famousperson, massage);
// Q6//
var whitespace = "\n\t sania naz \t\n";
console.log(whitespace);
var withoutwhitespace = whitespace.trim();
console.log(withoutwhitespace);
//Q7//
var Num1 = 4;
var Num2 = 4;
console.log(Num1 + Num2);
var num3 = 12;
var num4 = 4;
console.log(num3 - num4);
var num5 = 2;
var num6 = 4;
console.log(num5 * num6);
var num7 = 16;
var num8 = 2;
console.log(num7 / num8);
//Q8
console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
//Q9//
var favourtnumber = 5;
console.log("my fovourt number is", favourtnumber);
//Q10
//date:4/8/2014
//let famousperson:string ="Muhammad ali jinnah";
//let massage ='" expect tha best, prepare for tha worst." ';
//console.log(famousperson ,massage); 
//Q11
//1st method
var frndname = ["sania", "saba", "tuba", "sana"];
console.log(frndname[0]);
console.log(frndname[1]);
console.log(frndname[2]);
console.log(frndname[3]);
//2nd method
console.log("sania");
console.log("sana");
console.log("tuba");
console.log("amir");
//Q12
var friendname = ["sania", "saba", "tuba", "sana"];
var friendmassage = "hello, how are you?";
console.log(friendname[0], friendmassage);
console.log(friendname[1], friendmassage);
console.log(friendname[2], friendmassage);
console.log(friendname[3], friendmassage);
//Q13
var transportation = ["honda", "civics", "bmw"];
transportation.map(function (item) { return console.log("i would like to own A", item); });
//Q14
var guest = ["fatima", "rabia", "anum"];
guest.forEach(function (invite) { return console.log("can you come my home for dinner today ".concat(invite)); });
//Q15
var guestlist = ["fatima", "rabia", "anum"];
var dontcome = guestlist[0];
console.log(dontcome, "dont comeing");
guestlist.splice(0, 1, "sania");
guestlist.forEach(function (guestnew) { return console.log("hi ".concat(guestnew, ",can you come my home for dinnar")); });
// Q16
var newguestlist = ["fatima", "rabia", " anum"];
var notcome = newguestlist[0];
console.log(notcome, "dont coming");
newguestlist.splice(0, 1, "sania");
console.log("Big new, we have found a big table for dinnar");
newguestlist.unshift("ariba");
newguestlist.push("sana");
var middalguestnum = Math.floor(newguestlist.length / 2);
newguestlist.splice(middalguestnum, 0, "maham");
console.log("update new guest list");
newguestlist.forEach(function (addguest) { return console.log("hello ".concat(addguest, " would you like dinner to me")); });
