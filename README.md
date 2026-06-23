# LearnPlaywrightBatch2x

A beginner-friendly JavaScript learning repository covering core concepts, identifiers, literals, variables, functions, scope, hoisting, operators, conditionals, switch statements, user input, loops, and developer tooling.

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
│   ├── 24_null.js                            # typeof quirks with null
│   ├── 25_Literal_All.js                     # Integer literals: decimal, hex, octal, exponential
│   ├── 26_Literal_Number_all.js              # All number types: binary, float, BigInt, Infinity, NaN
│   ├── 27_String.js                          # Single quotes vs double quotes
│   └── 29_Backtick_single_double.js          # Comparison of '', "", and `` with examples
├── chapter_06_Operator/                        # Operators in JavaScript
│   ├── 30_Operator.js                          # Assignment operators
│   ├── 31_Arithmetic_OP.js                     # Arithmetic: +, -, *, /
│   ├── 32_Modulus_OP.js                        # Modulus (%) and even/odd check
│   ├── 33_Expo_OP.js                           # Exponentiation (**)
│   ├── 34_IQ.js                                # Compound assignment operators
│   ├── 35_Comparsion_OP.js                     # Comparison: >, <, >=, <=
│   ├── 36_Comparsion_Strict_loose.js           # Loose (==) vs strict (===) equality
│   ├── 37_IQ_Loose_Strict.js                   # Loose equality edge cases and transitivity
│   ├── 38_Confusing_Comparsion.js              # Deep dive into confusing comparisons
│   ├── 39_Logical_Op.js                        # Logical AND, OR, NOT
│   ├── 40_String_Con_Op.js                     # String concatenation with +=
│   ├── 41_Ternary_Op.js                        # Ternary operator and nested ternaries
│   ├── 42_Type_Op.js                           # typeof operator
│   ├── 43_Incre_Decre_Op.js                    # Pre/post increment and decrement
│   ├── 44_Null_Op.js                           # Nullish coalescing (??)
│   ├── 45_Post_Increment.js                    # Post-increment behavior
│   ├── 46_IQ_INCREMENT_D.js                    # Increment operator interview question
│   └── 47_Advance_ID_.js                       # Advanced increment/decrement expressions
├── Task_20May2026/                             # Practice Tasks
│   ├── Odd_Even.js                             # Odd/even number check
│   ├── Practise.js                             # Basic if-else practice (voting age)
│   └── Student_Grade_Calculator.js             # Grade calculator with if-else-if
├── chapter_07_If_else/                         # Conditional Statements
│   ├── 48_IF_ESLE.js                           # Basic if-else example
│   ├── 49_If_elseif_else.js                    # Grade calculator with if-else-if
│   ├── 50_REAL_IF_ELSE.js                      # Nested if-else: login and role-based access
│   ├── 51_API_IF_ELSE.js                       # API status code handling with if-else
│   ├── 52_IQ_IF_ELSE.js                        # Truthy and falsy values in conditions
│   ├── 53_IF_ELSE_real.js                      # Logical operators in if conditions
│   ├── 54_IQ.js                                # Single-line if without braces
│   ├── 55_IE.js                                # Single if statement allowed
│   ├── 56_IQ_EVEN_ODD.js                       # Even/odd check with strict equality
│   ├── 57_Grade_Calc.js                        # Grade calculator (clean version)
│   └── 58_LEAP_YEAR.js                         # Leap year logic
├── chapter_08_Switch_Statement/                # Switch Statements
│   ├── 59_Switch.js                            # Basic switch with break
│   ├── 60_No_Break.js                          # Fall-through behavior without break
│   ├── 61_Default.js                           # Default case in switch
│   ├── 62_REAL_TIME_EXAMPLE.js                 # API response code validation with switch
│   ├── 63_Switch_Group.js                      # Grouped cases (browser engine check)
│   ├── 64_IQ.js                                # Fall-through IQ question
│   ├── 65_IQ2.js                               # Switch with boolean expressions (grade ranges)
│   ├── 66_IQ3.js                               # Duplicate case behavior
│   └── 67_IQ4.js                               # Strict equality in switch (0 vs false)
├── chapter_09_UserInput/                       # User Input Methods
│   ├── 68_User_Input.js                        # Browser prompt for user input
│   ├── 69_Node_readline.js                     # Node.js readline module example
│   └── 70_prompt_sync.js                       # prompt-sync package example
├── chapter_10_Loops/                           # Loops in JavaScript
│   ├── 71_For_loop.js                          # Repetitive console.log vs loop concept
│   ├── 72_For_loop.js                          # Basic for loop syntax
│   ├── 73_For_Loop2.js                         # For loop with different variables
│   ├── 74_IQ.js                                # For loop edge cases and conditions
│   ├── 75_For_OF_IN_EACH.js                    # while loop basics
│   ├── 76_While.js                             # while loop examples
│   ├── 77_Do_While.js                          # do-while vs while comparison
│   ├── 78_Do_While.js                          # do-while retry example
│   ├── 79_IQ.js                                # Countdown with while loop
│   ├── 80_IQ.js                                # do-while with negative condition
│   ├── 81_IQ.js                                # continue statement in for loop
│   └── 82_IQ.js                                # do-while infinite loop edge case
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
| `25_Literal_All.js` | Integer literals: decimal, hexadecimal (`0xFF`), octal (`0o77`), exponential (`1e6`) |
| `26_Literal_Number_all.js` | All number types: binary (`0b`), float, BigInt, `Infinity`, `NaN`, numeric separators, `Number` properties |
| `27_String.js` | Single quotes vs double quotes, `typeof` for characters and strings |
| `28_Template_Literal.js` | Backtick strings with `${}` interpolation, multi-line, Playwright/QA real-world examples |
| `29_Backtick_single_double.js` | Comparison table of `''`, `""`, and `` ` `` with feature matrix and real examples |

### Chapter 06: Operators

| File | Content |
|------|---------|
| `30_Operator.js` | Assignment operator `=` |
| `31_Arithmetic_OP.js` | Arithmetic: `+`, `-`, `*`, `/` |
| `32_Modulus_OP.js` | Modulus `%`, even/odd check |
| `33_Expo_OP.js` | Exponentiation `**` |
| `34_IQ.js` | Compound assignment: `+=`, `-=`, `*=`, `/=`, `%=` |
| `35_Comparsion_OP.js` | Comparison operators: `>`, `<`, `>=`, `<=` |
| `36_Comparsion_Strict_loose.js` | Loose `==` vs strict `===` equality |
| `37_IQ_Loose_Strict.js` | Loose equality edge cases: `"" == "0"`, `null == undefined` |
| `38_Confusing_Comparsion.js` | Deep dive into confusing comparisons, `NaN`, `[]`, `null` gotchas |
| `39_Logical_Op.js` | Logical `&&`, `||`, `!` |
| `40_String_Con_Op.js` | String concatenation with `+=` |
| `41_Ternary_Op.js` | Ternary operator, nested ternaries, QA real-world examples |
| `42_Type_Op.js` | `typeof` operator examples |
| `43_Incre_Decre_Op.js` | Pre/post increment and decrement |
| `44_Null_Op.js` | Nullish coalescing operator `??` |
| `45_Post_Increment.js` | Post-increment behavior |
| `46_IQ_INCREMENT_D.js` | Increment operator IQ question |
| `47_Advance_ID_.js` | Advanced increment/decrement expressions |

### Task_20May2026: Practice Tasks

| File | Content |
|------|---------|
| `Odd_Even.js` | Odd/even number check using modulus |
| `Practise.js` | Basic if-else practice with voting age |
| `Student_Grade_Calculator.js` | Grade calculator with if-else-if ladder |

### Chapter 07: If-Else Statements

| File | Content |
|------|---------|
| `48_IF_ESLE.js` | Basic if-else: voting eligibility |
| `49_If_elseif_else.js` | Grade calculator with if-else-if |
| `50_REAL_IF_ELSE.js` | Nested if-else: login and role-based access control |
| `51_API_IF_ELSE.js` | API status code handling with if-else |
| `52_IQ_IF_ELSE.js` | Truthy and falsy values in conditions |
| `53_IF_ELSE_real.js` | Logical operators (`&&`, `||`) in if conditions |
| `54_IQ.js` | Single-line if without braces |
| `55_IE.js` | Single if statement is allowed without else |
| `56_IQ_EVEN_ODD.js` | Even/odd check with strict equality `===` |
| `57_Grade_Calc.js` | Clean grade calculator (corrected version) |
| `58_LEAP_YEAR.js` | Leap year logic with modulus operators |

### Chapter 08: Switch Statements

| File | Content |
|------|---------|
| `59_Switch.js` | Basic switch statement with `break` |
| `60_No_Break.js` | Fall-through behavior when `break` is omitted |
| `61_Default.js` | Default case handling in switch |
| `62_REAL_TIME_EXAMPLE.js` | API response code validation with switch |
| `63_Switch_Group.js` | Grouped cases (Chromium vs Mozilla vs Safari) |
| `64_IQ.js` | Fall-through IQ question |
| `65_IQ2.js` | Switch with boolean expressions (grade ranges) |
| `66_IQ3.js` | Duplicate case behavior in switch |
| `67_IQ4.js` | Strict equality in switch: `0` vs `false` |

### Chapter 09: User Input

| File | Content |
|------|---------|
| `68_User_Input.js` | Browser `prompt()` for user input |
| `69_Node_readline.js` | Node.js `readline` module example |
| `70_prompt_sync.js` | `prompt-sync` npm package example |

### Chapter 10: Loops

| File | Content |
|------|---------|
| `71_For_loop.js` | Repetitive `console.log` vs loop concept |
| `72_For_loop.js` | Basic `for` loop syntax and execution |
| `73_For_Loop2.js` | `for` loop with different variable names |
| `74_IQ.js` | `for` loop edge cases and conditions |
| `75_For_OF_IN_EACH.js` | `while` loop basics |
| `76_While.js` | `while` loop examples |
| `77_Do_While.js` | `do-while` vs `while` comparison |
| `78_Do_While.js` | `do-while` retry example |
| `79_IQ.js` | Countdown with `while` loop |
| `80_IQ.js` | `do-while` with negative condition |
| `81_IQ.js` | `continue` statement in `for` loop |
| `82_IQ.js` | `do-while` edge case (infinite loop risk) |

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
    node chapter_05_Literal/27_String.js
    node chapter_05_Literal/28_Template_Literal.js
    node chapter_05_Literal/29_Backtick_single_double.js

    # Operators
    node chapter_06_Operator/30_Operator.js
    node chapter_06_Operator/38_Confusing_Comparsion.js
    node chapter_06_Operator/41_Ternary_Op.js

    # If-Else
    node chapter_07_If_else/48_IF_ESLE.js
    node chapter_07_If_else/50_REAL_IF_ELSE.js
    node chapter_07_If_else/58_LEAP_YEAR.js

    # Switch
    node chapter_08_Switch_Statement/59_Switch.js
    node chapter_08_Switch_Statement/62_REAL_TIME_EXAMPLE.js

    # Loops
    node chapter_10_Loops/72_For_loop.js
    node chapter_10_Loops/76_While.js
    node chapter_10_Loops/77_Do_While.js
   ```

## VS Code Shortcuts

- [Windows Shortcuts](chapter_03_Identifier_Literals/VS_Code_Keyboardshortcut_Windows.md)
- [Mac Shortcuts](chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_mac.md)

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

---

Happy Learning!
