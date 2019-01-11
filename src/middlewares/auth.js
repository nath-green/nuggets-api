const jwt = require('jsonwebtoken');
const config = require('../../config');

exports.isAuthenticated = (req, res, next) => {
  const token = req.headers['x-access-token'];
  return jwt.verify(token, config.secret, (err, decoded) => {
    if (err || decoded.app !== config.app) return res.status(401).json({ auth: false });
    return next();
  });
};
