function CaesarCipher({ input, shift }) {
    var originalOrderUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var originalOrderLow = "abcdefghijklmnopqrstuvwxyz";
    var result = "";
    var foundFlag = false;
    for (var i = 0; i < input.length; i++) {
        foundFlag = false;
        for (var j = 0; j < originalOrderUp.length; j++) {
            if (input[i] == originalOrderUp[j]) {
                result = result + originalOrderUp[(j + shift) % 26];
                foundFlag = true;
            }
        }
        for (var k = 0; k < originalOrderLow.length; k++) {
            if (input[i] == originalOrderLow[k]) {
                result = result + originalOrderLow[(k + shift) % 26];
                foundFlag = true;
            }
        }
        if (foundFlag == false) {
            result = result + input[i];
        }
    }
    this.result = result;
}