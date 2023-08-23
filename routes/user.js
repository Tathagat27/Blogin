import { Router } from "express";
import { handleUserLogin, handleUserSignup } from "../controllers/user.js";

export const router = Router();

router.get('/login', (req, res) => {
    return res.render('login');
});
router.get('/signup', (req, res) => {
    return res.render('signup');
});

router.post('/login', handleUserLogin);
router.post('/signup', handleUserSignup);
router.get('/logout', (req, res) => {
    res.clearCookie('token').redirect('/');
})
