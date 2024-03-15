const jwt = require("jsonwebtoken");

const accessTokenSecret = process.env.JWT_TOKEN_SECRET || "test-secret";

const generateAccessToken = ({_id, firstName, lastName, email}) => {
    return jwt.sign(
        { _id, firstName, lastName, email },
        accessTokenSecret,
        {
            expiresIn: 5 * 60 * 60,
        }
    );
};

const isAuthorized = (req, res, next) => {
    const { authorization } = req.headers;
    const token =
        authorization && authorization.split(" ")[0] === "Bearer"
            ? authorization.split(" ")[1]
            : null;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, accessTokenSecret, async (err, data) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        }


        req.user = data;
        next();
    });
};

module.exports = {
    isAuthorized,
    generateAccessToken
}