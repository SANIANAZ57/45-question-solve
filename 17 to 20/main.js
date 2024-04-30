//Q17
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
console.log("unfortuantely,tha new dinner table wont arrary on the time so, em intive only two person");
while (newguestlist.length > 2) {
    var newguestlistremove = newguestlist.pop();
    console.log("soory, ".concat(newguestlistremove, " you are not intived to dinner"));
}
console.log("you are intived to dinner");
newguestlist.forEach(function (lesttwo) { return console.log("you are luckly, ".concat(lesttwo, " intived to dinner")); });
newguestlist.pop();
newguestlist.pop();
console.log("empty", newguestlist);
//Q18//
var countriesvisit = ["Dubai", "turkiye", "USA", "Paris"];
console.log("orginial arrey", countriesvisit);
console.log("Alphabatical order", __spreadArray([], countriesvisit, true).sort());
console.log("orginial order:", countriesvisit);
console.log("reverse order", __spreadArray([], countriesvisit, true).reverse());
console.log("orginial order:", countriesvisit);
//Q19
var guest = ["fatima", "rabia", "anum"];
//guest.forEach(invite => console.log(`can you come my home for dinner today ${invite}`));
var guestlistnum = guest.length;
console.log("we are inviting total ".concat(guestlistnum, " guest"));
//Q20//
var makeupproduct = ["lipstick", "eyerliner", "foundation", "lipglosses"];
console.log("list of makeupproduct");
makeupproduct.forEach(function (makeup) { return console.log(makeup); });
