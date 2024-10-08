const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");
const createUser = async (user) => {
  try {
    let { firstName, lastName, email, password } = userData;

    const isUserExist = await UserActivation.findOne({ email: email });
    if (isUserExist) {
      throw new Error("User already exists.", email);
    }
    password = await bcrypt.hash(password, 8);
    const user = await User.create({ firstName, lastName, email, password });
    console.log("created user", user);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error(error.message);
  }
};

// find user by id

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId).populate("address");
    if (!user) {
      throw new Error("User not found", user);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found with email", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// get user profile by token

const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserProfileByToken(token);

    const user = await findUserByUserId(userId);
  } catch (error) {}
};

module.exports = { createUser, findUserByEmail, findUserById };
