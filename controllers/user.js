import { USER } from "../models/user.js";

export const handleUserSignup = async (req, res) => {
  const { fullName, email, password } = req.body;

  await USER.create({
    fullName,
    email,
    password,
  });

  return res.redirect("/");
};

export const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await USER.matchPasswordAndGenerateToken(email, password);

    return res.cookie("token", token).redirect("/");
    
  } catch (error) {
    return res.render("login", {
      error: "Incorrect Email or Password",
    });
  }
};
