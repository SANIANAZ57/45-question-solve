//Ques#37 
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} shirt with  ${printMessage} print on shirt`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Also Love Javascript");
export {};
