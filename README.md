# Caesar Cipher

# Installation
Add this script tag to your html code

```html
<script src="https://cdn.jsdelivr.net/npm/js-caesarcipher@1.0.2/script.js"></script>
```

# Useage

Use the function `new CaesarCipher()`

Example: "Hello World", after shifting 2 letters will be "Jgnnq Yqtnf"

```javascript
let cipher = new CaesarCipher({
    "input": "Hello World",
    "shift": 2
});
console.log(cipher.result);
// The output will be "Jgnnq Yqtnf"
```

* The `input` is unciphered plain text.
* The `shift` is shift how many letters.
