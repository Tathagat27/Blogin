import jwt from "jsonwebtoken";

export const createTokenForUSer = (user) => {
    const payload = {
        _id : user._id,
        email : user.email,
        profileImageURL : user.profileImageURL,
        role : user.role,
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY);

    return token;
}

export const validateToken = (token) => {
    const payload = jwt.verify(token, process.env.SECRET_KEY);

    return payload;
}