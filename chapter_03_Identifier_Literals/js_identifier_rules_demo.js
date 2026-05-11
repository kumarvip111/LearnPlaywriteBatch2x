/**
 * ============================================================
 * JAVASCRIPT IDENTIFIER NAMING RULES - COMPLETE DEMONSTRATION
 * ============================================================
 * This file demonstrates ALL the rules for naming identifiers
 * in JavaScript in a single, organized example.
 */

// ============================================================
// 1. VALID CHARACTERS (Letters, Digits, _, $)
// ============================================================

// Can contain letters
let userName = "Alice";

// Can contain digits (but NOT as the first character)
let user2 = "Bob";
let itemCount10 = 10;

// Can contain underscores
let _privateVar = "secret";
let first_name = "John";

// Can contain dollar signs
let $element = "div";
let jQuery$ = "library";

// Can use Unicode letters (international characters)
let αβγ = "greek";
let 用户 = "Chinese user";
let utilisateur = "French user";

// Can use Unicode escape sequences
let \u0041pple = "Apple using unicode escape"; // \u0041 is 'A'

// Case-sensitive: all these are DIFFERENT identifiers
let myVar = 1;
let MyVar = 2;
let MYVAR = 3;

console.log("--- Section 1: Valid Characters ---");
console.log(`userName: ${userName}`);
console.log(`user2: ${user2}`);
console.log(`_privateVar: ${_privateVar}`);
console.log(`$element: ${$element}`);
console.log(`αβγ: ${αβγ}`);
console.log(`\u0041pple: ${\u0041pple}`);
console.log(`Case-sensitive: myVar=${myVar}, MyVar=${MyVar}, MYVAR=${MYVAR}`);


// ============================================================
// 2. INVALID IDENTIFIERS (These will cause Syntax Errors)
// ============================================================

// UNCOMMENT ANY OF THESE TO SEE A SYNTAX ERROR:

// let 1stPlace = "gold";     // ❌ ERROR: Cannot start with a digit
// let my-var = "test";       // ❌ ERROR: Cannot contain hyphen
// let my var = "test";       // ❌ ERROR: Cannot contain space
// let class = "Math";        // ❌ ERROR: 'class' is a reserved keyword
// let my@var = "email";      // ❌ ERROR: Cannot contain special character @
// let my#tag = "hashtag";    // ❌ ERROR: Cannot contain special character #
// let hello! = "greeting";   // ❌ ERROR: Cannot contain special character !


// ============================================================
// 3. RESERVED WORDS (Cannot use as identifiers)
// ============================================================

// Keywords used for control flow and declarations:
// break, case, catch, class, const, continue, debugger, default, delete, do,
// else, export, extends, finally, for, function, if, import, in, instanceof,
// new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield

// Strict mode reserved words:
// implements, interface, let, package, private, protected, public, static

// Future reserved words:
// enum

// Literals (values, not technically reserved but treated as such):
// true, false, null

// Examples of what NOT to do (all would cause errors):
// let class = "A";           // ❌ 'class' is reserved
// let const = 5;             // ❌ 'const' is reserved
// let var = "variable";      // ❌ 'var' is reserved
// let true = 1;              // ❌ 'true' is a literal
// let null = "nothing";      // ❌ 'null' is a literal

console.log("\n--- Section 3: Reserved Words ---");
console.log("Reserved words like 'class', 'const', 'var', 'if', 'for', 'return', 'true', 'null' cannot be used as identifiers.");


// ============================================================
// 4. NAMING CONVENTIONS (Best Practices)
// ============================================================

// camelCase: Variables and functions
let userProfile = "Alice Smith";
let totalPrice = 99.99;
let isActive = true;

function getUserName() {
    return userProfile;
}

function calculateTotal(price, tax) {
    return price + tax;
}

// PascalCase: Classes and constructor functions
class UserAccount {
    constructor(name) {
        this.name = name;
    }
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// UPPER_SNAKE_CASE: Constants
const MAX_USERS = 100;
const PI = 3.14159;
const API_KEY = "abc123xyz";

// Leading underscore: "Private" variables (convention only in JS)
let _internalId = 42;
let _cache = {};

// Trailing underscore: Avoid conflicts with reserved words (rarely needed)
// let class_ = "Math"; // Valid, but better to use 'className' or 'subject'

console.log("\n--- Section 4: Naming Conventions ---");
console.log(`camelCase variable: userProfile = "${userProfile}"`);
console.log(`camelCase function: getUserName() = "${getUserName()}"`);
console.log(`PascalCase class: new UserAccount("Bob")`);
console.log(`Constant: MAX_USERS = ${MAX_USERS}`);
console.log(`Private convention: _internalId = ${_internalId}`);


// ============================================================
// 5. SPECIAL CASES AND EDGE CASES
// ============================================================

// Single character identifiers (valid but use sparingly)
let x = 10;
let i = 0; // Common in loops
let _ = "ignore this value";

// Very long identifiers (valid but avoid excessive length)
let thisIsAVeryLongVariableNameThatDescribesEverythingInDetail = "too long";

// Identifiers that look like numbers but aren't
let _123 = "starts with underscore, not a digit";
let $123 = "starts with dollar sign, not a digit";

// Using $ commonly for DOM elements or jQuery-like libraries
let $button = "DOM reference";
let _lodash = "library reference";

console.log("\n--- Section 5: Special Cases ---");
console.log(`Single char 'x': ${x}`);
console.log(`Starts with underscore: _123 = "${_123}"`);
console.log(`Starts with dollar: $123 = "${$123}"`);
console.log(`Long name: ${thisIsAVeryLongVariableNameThatDescribesEverythingInDetail}`);


// ============================================================
// 6. SUMMARY CHEAT SHEET
// ============================================================

/*
✅ RULES:
   • Can use: a-z, A-Z, 0-9, _, $, Unicode letters
   • Must start with: letter, _, or $ (NOT a digit)
   • Cannot contain: spaces, hyphens, or special characters (@, #, !, etc.)
   • Case-sensitive: myVar ≠ MyVar ≠ MYVAR
   • No length limit

❌ CANNOT USE:
   • Reserved keywords: break, class, const, function, if, return, var, etc.
   • Literals: true, false, null
   • Identifiers starting with a digit

📝 CONVENTIONS:
   • camelCase     → variables, functions     (myVariable, getData())
   • PascalCase    → classes, constructors    (User, MyClass)
   • UPPER_SNAKE   → constants                (MAX_SIZE, API_URL)
   • _underscore   → "private" variables      (_internalValue)

✅ VALID EXAMPLES:
   name, userName, _private, $elem, name1, αβγ, user_name

❌ INVALID EXAMPLES:
   1name, my-name, my name, class, my@var, hello!
*/

console.log("\n--- Section 6: Summary ---");
console.log("Check the comments in this file for a complete cheat sheet!");
