const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtExpiration = '1h';

const signToken = ({ _id, username, email }) => {
    const payload = {
        _id,
        username,
        email,
    };

    return jwt.sign({ data: payload }, process.env.JWT_SECRET, {
        expiresIn: jwtExpiration,
    });
}

const authMiddleware = ({ req }) => {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
    }

    if (!token) {
        return req;
    }

    try {
        const { data } = jwt.verify(token, process.env.JWT_SECRET, {
            maxAge: jwtExpiration,
        });

        req.user = data;

    } catch (err) {
        console.error('Invalid token');
    }

    return req;
}

module.exports = {
    signToken,
    authMiddleware,
}
