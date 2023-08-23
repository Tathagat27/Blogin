import { USER } from "../models/user.js"

export const handleUserSignup = async (req, res) => {
    const { fullName, email, password} = req.body;

    await USER.create({
        fullName,
        email,
        password,
    })

    return res.redirect('/');

}

export const handleUserLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await USER.matchPassword(email, password);

    console.log("User : ", user);

    return res.redirect('/');

}