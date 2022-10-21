const rateLimit = require('express-rate-limit');

const reqLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { reqLimiter };