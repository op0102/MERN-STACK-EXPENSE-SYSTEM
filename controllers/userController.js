const userModel = require("../models/userModel")




//LOGIN CALLBACK
const loginController = async (req, res) => {
    try {
        const { email, passward } = req.body;
        const user = await userModel.findOne({ email, passward });
        if (!user) {
            return res.status(404).send("user not found")
        }
        res.status(200).json({
            sucess: true,
            user
        });

    } catch (error) {
        res.status(400).json({
            sucess: false,
            error
        })

    }

}

//REGISTER CALLBACK
const registerController = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({
            sucess:true,
            newUser
        })


    } catch (error) {
        res.status(400).json({
            sucess: false,
            error
        })


    }

}



module.exports = { loginController, registerController }