import express from "express";
import {forgetpasswordcontroller, registerController} from '../controllers/authController.js';
import { logincontroller } from "../controllers/authController.js";
import {testController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
//router object

const router=express.Router()
router.post('/register',registerController)


//login}}POst

router.post('/login',logincontroller)

//forget pasword
router.post('/forgot-password',forgetpasswordcontroller)


//test routes
router.get('/test', requireSignIn, isAdmin, testController)


//protecting u route
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

//protecting  Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;