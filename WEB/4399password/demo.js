const crypto = require('crypto-js')

function encryptAES(IdVal) {
	return crypto.AES.encrypt(IdVal, "lzYW5qaXVqa").toString();
}

console.log(encryptAES('123'));