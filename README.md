# Caesar Cipher

[Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher) is a text encryption  to shift letters to encrypt message in ancient time.

This package are some packed functions using for process Caesar cipher.

# Installation
*  Browser

Add this script tag to your html code

```html
<script src="https://cdn.jsdelivr.net/npm/js-caesarcipher/script.js"></script>
```

* Node.js

Install Command

```bash
npm install js-caesarcipher
```

# Useage

**For node.js enviroment**

If you are in node.js enviroment, you need to initalize first

```javascript
const CaesarCipher = require("js-caesarcipher");
```

**Cipher the text**

Use the function `new CaesarCipher()` to cipher raw text.

Example: "Hello World", after shifting 2 letters will be "Jgnnq Yqtnf"

```javascript
// For Browser useage
let cipher = new CaesarCipher({
    "input": "Hello World",
    "shift": 2
});
console.log(cipher.result);

// For Node.js useage
const cipher = CaesarCipher.cipher({
    "input": "Hello World",
    "shift": 2
});

console.log(cipher.result);

// The output will be "Jgnnq Yqtnf"
```

* The `input` is unciphered plain text.
* The `shift` is shift how many letters.

**Decipher the text**

Use the function `CaesarCipher.deCipher()` to decipher ciphered text.

```javascript
// For both Browser and Node.js useage
let decipher = CaesarCipher.deCipher("Jgnnq Yqtnf", 2);
console.log(decipher)
// The output will be "Hello World"
```

**Crack ciphered text**

Use the function `CaesarCipher.crack()` to crack all the possible shifts of a ciphered text if you don't have the shift. 

```javascript
// For both Browser and Node.js useage
let crack = CaesarCipher.crack("Jgnnq Yqtnf");
console.log(crack);
/* 

The output will be a array which list out all the shifts: 

Example output:
[
    'Jgnnq Yqtnf',
    'Khoor Zruog',
    'Lipps Asvph',
    'Mjqqt Btwqi',
    'Nkrru Cuxrj',
    'Olssv Dvysk',
    'Pmttw Ewztl',
    'Qnuux Fxaum',
    'Rovvy Gybvn',
    'Spwwz Hzcwo',
    'Tqxxa Iadxp',
    'Uryyb Jbeyq',
    'Vszzc Kcfzr',
    'Wtaad Ldgas',
    'Xubbe Mehbt',
    'Yvccf Nficu',
    'Zwddg Ogjdv',
    'Axeeh Phkew',
    'Byffi Qilfx',
    'Czggj Rjmgy',
    'Dahhk Sknhz',
    'Ebiil Tloia',
    'Fcjjm Umpjb',
    'Gdkkn Vnqkc',
    'Hello World',
    'Ifmmp Xpsme'
]

*/
```
