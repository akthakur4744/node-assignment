const crypto = require('crypto');

/**To Hash the passwords */
const Encrypt=(password)=> {
  return crypto
    .createHash('sha256')
    .update(password)
    .digest('hex');
}

module.exports= Encrypt;