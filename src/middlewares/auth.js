// ROLES
// 1 - user authenticated
// 2 - admin
// 3 - super

exports.hasRole = (role = 1) => (req, res, next) => {
  if (!req.cookies.session || req.cookies.session.role < role)
    res.status(401).json({ auth: false });
  else next();
};

exports.isAdmin = () => (req, res, next) => {
  const { username, password } = req.body;
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    next();
  } else {
    res.status(401).json({ auth: false });
  }
};

exports.sessionUser = {
  username: process.env.ADMIN_USERNAME,
  role: process.env.ADMIN_ROLE
}
