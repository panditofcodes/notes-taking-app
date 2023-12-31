const mongooose = require("mongoose");
const bcrypt = require("bcrypt");
const SECRET_KEY = "This notes-taking-app is developed by Pandit Of Codes or PODES."
const jwt = require('jsonwebtoken')

const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign(
      {
        id: this._id,
      },
      process.env.SECRET_KEY
    );
    this.tokens = this.tokens.concat({
        token: token
    })
    await this.save()
    return token
  } catch (err) {
    console.log(err);
  }
};

const User = mongooose.model("USER", userSchema);

module.exports = User;
