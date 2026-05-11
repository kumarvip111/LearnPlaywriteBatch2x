var name = "Pramod";

// ============================================
// 1. camelCase
// First word lowercase, each subsequent word capitalized
// Used for: variables, functions
// ============================================
var firstName = "Pramod";
var lastName = "Dutta";
var userEmailAddress = "pramod@example.com";
var isUserActive = true;

function getUserName() {
    return firstName + " " + lastName;
}

// ============================================
// 2. PascalCase (UpperCamelCase)
// Every word starts with uppercase letter
// Used for: classes, constructor functions, React components
// ============================================
var UserProfile = "ClassNameStyle";
var TotalPrice = 99.99;

class UserAccount {
    constructor(name) {
        this.name = name;
    }
}

function PersonDetails(first, last) {
    this.firstName = first;
    this.lastName = last;
}

// ============================================
// 3. snake_case
// All lowercase with underscores between words
// Used for: variables, database fields, file names
// ============================================
var first_name = "Amit";
var last_name = "Sharma";
var user_email_address = "amit@example.com";
var total_price = 49.99;
var is_user_active = false;

// ============================================
// 4. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE)
// All uppercase with underscores between words
// Used for: constants, environment variables
// ============================================
var MAX_USERS = 100;
var API_BASE_URL = "https://api.example.com";
var DATABASE_HOST = "localhost";
var PI_VALUE = 3.14159;

// ============================================
// 5. Leading Underscore (_private)
// Convention to indicate "private" or "internal" use
// Not enforced by JavaScript, just a developer convention
// ============================================
var _privateVar = "internal use only";
var _count = 0;
var _internalUserId = 12345;

// ============================================
// 6. kebab-case (NOT VALID for JS identifiers)
// All lowercase with hyphens between words
// Used in: HTML attributes, CSS classes, URLs
// JavaScript variables CANNOT use hyphens!
// ============================================
// var user-name = "Invalid"; // ERROR! Hyphens are not allowed
// var first-name = "Invalid"; // ERROR! JavaScript sees this as subtraction

console.log("camelCase: " + firstName + " " + lastName);
console.log("snake_case: " + first_name + " " + last_name);
console.log("PascalCase Class: " + UserAccount.name);
console.log("SCREAMING_SNAKE_CASE Constants: " + MAX_USERS + ", " + API_BASE_URL);
console.log("Private convention: " + _privateVar);
