const CaesarCipher = require("./script.js");

const cipher = CaesarCipher.cipher({
    "input": "cooler",
    "shift": 2
});

console.log(CaesarCipher.deCipher("eqqngt", 2));
console.log(CaesarCipher.crack("eqqngt"));
console.log(cipher.result);

