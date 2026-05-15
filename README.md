# LearnPlaywrightBatch2x

A beginner-friendly JavaScript learning repository covering core concepts, identifiers, literals, and developer tooling.

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

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/kumarvip111/LearnPlaywriteBatch2x.git
   ```

2. Navigate to any chapter and run the JavaScript files:
   ```bash
   node chapter_01_Basics/01_Basics.js
   node chapter_03_Identifier_Literals/07_Identifier_Part2.js
   node chapter_03_Identifier_Literals/js_identifier_rules_demo.js
   ```

## VS Code Shortcuts

- [Windows Shortcuts](chapter_03_Identifier_Literals/VS_Code_Keyboardshortcut_Windows.md)
- [Mac Shortcuts](chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_mac.md)

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

---

Happy Learning!
