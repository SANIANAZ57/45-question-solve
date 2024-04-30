//Q17

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
console.log("unfortuantely,tha new dinner table wont arrary on the time so, em intive only two person")
while(newguestlist.length>2){
     let newguestlistremove = newguestlist.pop();
     console.log(`soory, ${newguestlistremove} you are not intived to dinner`)
     
}
console.log("you are intived to dinner");
newguestlist.forEach(lesttwo => console.log(`you are luckly, ${lesttwo} intived to dinner`));

newguestlist.pop();
newguestlist.pop();
console.log("empty",newguestlist);


//Q18//

let countriesvisit:string[] = ["Dubai", "turkiye" ,"USA" ,"Paris"];
console.log("orginial arrey",countriesvisit);

console.log("Alphabatical order",[...countriesvisit].sort());

console.log("orginial order:",countriesvisit);

console.log("reverse order", [...countriesvisit].reverse());

console.log("orginial order:",countriesvisit);

//Q19

let guest:string[] = ["fatima","rabia","anum"];
//guest.forEach(invite => console.log(`can you come my home for dinner today ${invite}`));
let guestlistnum =guest.length;

console.log(`we are inviting total ${guestlistnum} guest`);

//Q20//


let makeupproduct:string[] = ["lipstick" , "eyerliner", "foundation","lipglosses"];
console.log("list of makeupproduct");
makeupproduct.forEach(makeup => console.log(makeup));