var a = 10;  //Global Scope


/* var is function-scoped, 
so it can be accessed anywhere in the function or 
globally if declared outside a function. */

console.log(a); // Output: 10

function printHello() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; //local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // Output: 30
    }

}

printHello();
console.log(a); //Output: 10 (global 'a' is unaffected by changes in the function)

var a = 50;