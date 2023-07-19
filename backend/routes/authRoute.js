const express = require("express");
const { 
    registercontroller, 
    loginController, 
    forgotPasswordController, 
    emailController} = require("../controller/authController");
const { voterController } = require("../controller/voteController");
const { updateVoteController } = require("../controller/updateVoteController");
const { getAllVoteController } = require("../controller/getAllVoteController");
const rashtrapatiController = require("../controller/rashtrapatiController");

const router = express.Router();

router.post("/register",registercontroller);
router.post("/login",loginController);
router.post("/forgot-password",forgotPasswordController);
router.post('/voter', voterController);
router.post('/sendEmail', emailController);

router.put('/updateVoter', updateVoteController); // Voter Database Updating Path

router.get('/all-vote', getAllVoteController)

router.post('/rashtrapatiRegister', 
            formidable(),
            rashtrapatiController); // getting all votes paths
module.exports = router;