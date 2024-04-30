console.log(" 45 question solve");

//Q2 //

let Name: string="SANI";
console.log ('hello' ,Name, "would u like to learn some python today?");

// Q3//

let personname = "sania";
console.log(personname.toLowerCase());
console.log(personname.toUpperCase());
console.log(personname.charAt(0).toUpperCase()+personname.slice(1).toLowerCase())

 
//Q4//

console.log("Muhammad Ali Jinnah" , '"Expect the best, prepare for the worst." ') 

//Q5//

let famousperson:string ="Muhammad ali jinnah";
let massage ='" expect tha best, prepare for tha worst." ';
console.log(famousperson ,massage); 

// Q6//

let whitespace:string ="\n\t sania naz \t\n";
console.log(whitespace);
let withoutwhitespace = whitespace.trim();
console.log(withoutwhitespace);


//Q7//

let Num1:number =4;
let Num2:number =4;
console.log(Num1 + Num2);

let num3:number =12;
let num4:number =4;
console.log(num3 - num4);

let num5:number =2;
let num6:number =4;
console.log(num5 * num6);

let num7:number =16;
let num8:number =2;
console.log (num7/num8);

//Q8

console.log(4+4);
console.log(12-4);
console.log(4*2);
console.log(16/2);

//Q9//

let favourtnumber:number =5;
console.log("my fovourt number is" , favourtnumber);
 
//Q10

//date:4/8/2014
//let famousperson:string ="Muhammad ali jinnah";
//let massage ='" expect tha best, prepare for tha worst." ';
//console.log(famousperson ,massage); 

//Q11

//1st method

let frndname = ["sania","saba","tuba","sana"];
console.log(frndname[0]);
console.log(frndname[1]);
console.log(frndname[2]);
console.log(frndname[3])

//2nd method

console.log("sania");
console.log("sana");
console.log("tuba");
console.log("amir");

//Q12

let friendname = ["sania","saba","tuba","sana"];
let friendmassage ="hello, how are you?"
console.log(friendname[0] , friendmassage);
console.log(friendname[1] , friendmassage);
console.log(friendname[2] , friendmassage);
console.log(friendname[3] , friendmassage);

//Q13

let transportation:string[] =["honda" , "civics", "bmw"];
transportation.map((item)=> console.log("i would like to own A" ,item));

//Q14

let guest:string[] = ["fatima","rabia","anum"];
guest.forEach(invite => console.log(`can you come my home for dinner today ${invite}`));


//Q15

let guestlist = ["fatima","rabia","anum"];
let dontcome =guestlist[0];
console.log(dontcome, "dont comeing"); 
guestlist.splice(0 ,1 ,"sania");
guestlist.forEach(guestnew => console.log(`hi ${guestnew},can you come my home for dinnar`));

// Q16

let newguestlist =["fatima", "rabia"," anum"]
let notcome =newguestlist[0];
console.log(notcome,"dont coming");
newguestlist.splice(0,1, "sania");
console.log("Big new, we have found a big table for dinnar");
newguestlist.unshift("ariba");
newguestlist.push("sana");
let middalguestnum :number =Math.floor(newguestlist.length / 2);
newguestlist.splice(middalguestnum ,0,"maham");
console.log("update new guest list")
newguestlist.forEach(addguest => console.log (`hello ${addguest} would you like dinner to me`));


