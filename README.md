# LearnPlaywrightBatch2x

A beginner-friendly JavaScript learning repository covering core concepts, identifiers, literals, variables, functions, scope, hoisting, and developer tooling.

## Repository Structure

```
LearnPlaywriteBatch2x/
├── chapter_01_Basics/                          # JavaScript Basics
│   ├── 01_Basics.js                            # First Hello World program
│   ├── 02_JS.js                              # Variables, loops, and functions
│   ├── 03_JS_Verify_Setup.js                 # Verify Node.js environment setup
│   └── 04_Hot_Code.js                        # Function calls in a performance loop
├── chapter_02_Javascript_Concepts/            # Core JS Concepts
│   └── 05_JS_Basics.js                         # Variable declaration with var
├── chapter_03_Identifier_Literals/            # Identifiers, Comments & Shortcuts
│   ├── 06_Identifier_Rules.js                # (Placeholder for identifier rules)
│   ├── 07_Identifier_Part2.js                # Naming conventions with examples
│   ├── 08_Comments.js                        # Single-line, multi-line, and JSDoc comments
│   ├── js_identifier_rules_demo.js             # Complete identifier naming rules demo
│   ├── VS_Code_Keyboardshortcut_Windows.md     # VS Code shortcuts for Windows
│   └── VS_Code_keyboard_shortcut_mac.md        # VS Code shortcuts for Mac
├── chapter_04_Javascript_Concepts/            # Variables, Scope & Hoisting
│   ├── 09_var_let_cont.js                    # var vs let vs const basics
│   ├── 10_functions.js                       # Function declaration and calling
│   ├── 11_var_explained.js                   # var function scope and hoisting
│   ├── 12_let_people_love.js                 # let block scope and redeclaration rules
│   ├── 13_const_explained.js                 # const declaration and reassignment
│   ├── 14_var_functionscope.js               # var inside functions and blocks
│   ├── 15_let_scope.js                       # let inside functions and blocks
│   ├── 16_Hoisting.js                        # var hoisting with undefined
│   ├── 17_hoisting_fn.js                     # Function hoisting behavior
│   ├── 18_let_hoisting.js                    # let hoisting and Temporal Dead Zone (TDZ)
│   ├── 19_let_hoisting_block.js              # let TDZ inside block scope
│   ├── 20_let_const.js                       # const hoisting and TDZ
│   └── 21_Jr_QA.js                           # Practical QA interview example
├── chapter_05_Literal/                        # Data Types & Literals
│   ├── 22_Literal.js                         # String, boolean, number, null, undefined literals
│   ├── 23_null_undefined.js                  # null vs undefined deep comparison
│   └── 24_null.js                            # typeof quirks with null
├── Root Files (Topic Deep Dives)
│   ├── 25_Literal_All.js                     # Integer literals: decimal, hex, octal, exponential
│   ├── 26_Literal_Number_all.js              # All number types: binary, float, BigInt, Infinity, NaN
│   ├── 27_String.js                          # Single quotes vs double quotes
│   ├── 28_Template_Literal.js                # Backticks, variable interpolation, multi-line strings
│   └── 29_Backtick_single_double.js          # Comparison of '', "", and `` with examples
└── README.md
```

## File-by-File Overview

### Chapter 01: Basics

| File | Content |
|------|---------|
| `01_Basics.js` | Simple `console.log("Hello The Testing Academy!")` |
| `02_JS.js` | Variable declaration, `for` loop, and function definition |
| `03_JS_Verify_Setup.js` | Check Node.js `process.platform`, `process.version`, `process.arch` |
| `04_Hot_Code.js` | Function with parameters called 100,000 times in a loop |

### Chapter 02: JavaScript Concepts

| File | Content |
|------|---------|
| `05_JS_Basics.js` | Variable declaration with `var` and reassignment |

### Chapter 03: Identifiers & Literals

| File | Content |
|------|---------|
| `07_Identifier_Part2.js` | Naming conventions: `camelCase`, `PascalCase`, `snake_case`, `SCREAMING_SNAKE_CASE`, `_private`, `kebab-case` (invalid) |
| `08_Comments.js` | Single-line `//`, multi-line `/* */`, and JSDoc `/** */` comments |
| `js_identifier_rules_demo.js` | Complete demo: valid characters, invalid examples, reserved words, conventions, special cases, summary cheat sheet |
| `VS_Code_Keyboardshortcut_Windows.md` | VS Code keyboard shortcuts for Windows |
| `VS_Code_keyboard_shortcut_mac.md` | VS Code keyboard shortcuts for Mac |

### Chapter 04: Variables, Scope & Hoisting

| File | Content |
|------|---------|
| `09_var_let_cont.js` | `var` redeclaration and reassignment; `var` leaking outside loops |
| `10_functions.js` | Function declaration and multiple calls |
| `11_var_explained.js` | `var` function scope, global vs local, redeclaration inside function |
| `12_let_people_love.js` | `let` block scope, no redeclaration, `ReferenceError` outside block |
| `13_const_explained.js` | `const` cannot be reassigned; `let` block scope example |
| `14_var_functionscope.js` | `var` hoisted inside function, overwritten inside `if` block |
| `15_let_scope.js` | `let` block scope inside function and `if` block — no leakage |
| `16_Hoisting.js` | `var` hoisting: declared at top, initialized with `undefined` |
| `17_hoisting_fn.js` | `var` hoisted to top of function scope, not global |
| `18_let_hoisting.js` | `let` hoisting with Temporal Dead Zone (TDZ) |
| `19_let_hoisting_block.js` | Block-scoped `let` TDZ: inner `x` shadows outer `x` |
| `20_let_const.js` | `const` hoisting and TDZ behavior |
| `21_Jr_QA.js` | Practical example: using `const` before declaration throws `ReferenceError` |

### Chapter 05: Data Types & Literals

| File | Content |
|------|---------|
| `22_Literal.js` | String, boolean, number, null, undefined literals with `typeof` |
| `23_null_undefined.js` | Deep dive: `null` vs `undefined`, comparisons, `typeof` quirks, when to use each |
| `24_null.js` | Practical `typeof` examples with `null`, `undefined`, `0`, and empty string `""` |

### Root Files: Topic Deep Dives

| File | Content |
|------|---------|
| `25_Literal_All.js` | Integer literals: decimal, hexadecimal (`0xFF`), octal (`0o77`), exponential (`1e6`) |
| `26_Literal_Number_all.js` | All number types: binary (`0b`), float, BigInt, `Infinity`, `NaN`, numeric separators, `Number` properties |
| `27_String.js` | Single quotes vs double quotes, `typeof` for characters and strings |
| `28_Template_Literal.js` | Backtick strings with `${}` interpolation, multi-line, Playwright/QA real-world examples |
| `29_Backtick_single_double.js` | Comparison table of `''`, `""`, and `\` `` `\` `` with feature matrix and real examples |

## Naming Conventions Quick Reference

| Convention | Example | Used For |
|------------|---------|----------|
| camelCase | `userName`, `getData()` | Variables, Functions |
| PascalCase | `UserAccount`, `MyClass` | Classes, Constructors |
| snake_case | `first_name`, `total_price` | Variables, DB Fields |
| SCREAMING_SNAKE_CASE | `MAX_USERS`, `API_KEY` | Constants |
| _leadingUnderscore | `_privateVar` | Private / Internal |

## Identifier Rules Summary

- **Valid characters:** Letters, digits (not first), `_`, `$`, Unicode letters
- **Must start with:** Letter, `_`, or `$` (NOT a digit)
- **Cannot contain:** Spaces, hyphens, or special characters (`@`, `#`, `!`, etc.)
- **Case-sensitive:** `myVar` ≠ `MyVar` ≠ `MYVAR`
- **Reserved words:** `break`, `class`, `const`, `function`, `if`, `return`, `var`, `true`, `false`, `null`, etc. cannot be used as identifiers

## var vs let vs const Quick Reference

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Redeclaration | Allowed | Not Allowed | Not Allowed |
| Reassignment | Allowed | Allowed | Not Allowed |

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/kumarvip111/LearnPlaywriteBatch2x.git
   ```

2. Navigate to any chapter and run the JavaScript files:
   ```bash
   # Basics
   node chapter_01_Basics/01_Basics.js

   # Identifiers & Naming
   node chapter_03_Identifier_Literals/07_Identifier_Part2.js
   node chapter_03_Identifier_Literals/js_identifier_rules_demo.js

   # Scope & Hoisting
   node chapter_04_Javascript_Concepts/16_Hoisting.js
   node chapter_04_Javascript_Concepts/18_let_hoisting.js

   # Data Types
   node chapter_05_Literal/22_Literal.js
   node chapter_05_Literal/23_null_undefined.js

   # Strings & Literals
   node 27_String.js
   node 28_Template_Literal.js
   node 29_Backtick_single_double.js
   ```

## VS Code Shortcuts

- [Windows Shortcuts](chapter_03_Identifier_Literals/VS_Code_Keyboardshortcut_Windows.md)
- [Mac Shortcuts](chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_mac.md)

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

---

Happy Learning!
