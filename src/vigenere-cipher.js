const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.isDirect = direct;
  }

  _processText(text, key, encrypt = true) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    text = text.toUpperCase();
    key = key.toUpperCase();
    
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      
      if (char >= 'A' && char <= 'Z') {
        const textCode = char.charCodeAt(0) - 65;
        const keyCode = key[keyIndex % key.length].charCodeAt(0) - 65;
        
        let processedCode;
        if (encrypt) {
          // Encryption: (text + key) mod 26
          processedCode = (textCode + keyCode) % 26;
        } else {
          // Decryption: (text - key + 26) mod 26
          processedCode = (textCode - keyCode + 26) % 26;
        }
        
        result.push(String.fromCharCode(processedCode + 65));
        keyIndex++;
      } else {
        // Non-alphabet characters are preserved as-is
        result.push(char);
      }
    }

    // Reverse if needed
    return this.isDirect ? result.join('') : result.reverse().join('');
  }

  encrypt(message, key) {
    return this._processText(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this._processText(encryptedMessage, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
