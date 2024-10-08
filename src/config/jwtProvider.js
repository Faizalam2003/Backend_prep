const jwt = require("jsonwebtoken");

const SECRET_KEY = "jkdnjkedkjjdkjnediu4ejknejknedknkdnekndnjkend3i2kjdl";
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, SECRET_KEY, {
    expiresIn: "48h",
  });
  return token;
};

const getUserFromToken = (token) => {
  const decodedToken = jwt.verify(token, SECRET_KEY);
  return decodedToken?.userId;
};

module.exports = { generateToken, getUserFromToken };
