const User = require("../models/userSchema");
const jwt = require('jsonwebtoken');
const SECRET_KEY = "This notes-taking-app is developed by Pandit Of Codes or PODES.";

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtToken;

        if (!token) {
            throw new Error('No token provided');
        }

        const verifyToken = jwt.verify(token, SECRET_KEY); // Use the actual SECRET_KEY here

        const rootUser = await User.findOne({ _id: verifyToken.id, "tokens.token": token });

        if (!rootUser) {
            throw new Error('User not found');
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    } catch (err) {
        res.status(401).send('Unauthorized!');
        console.log(err);
    }
}

module.exports = authenticate;
