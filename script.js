const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  // your code here and return token
  const options = {expiresIn:'1h'};

  return jwt.sign(payload, secret, options)
};

module.exports = encrypt;
