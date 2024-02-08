const express = require("express")
const { UserModel } = require("../models/UserModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userRouter = express.Router()


userRouter.get("/", (req, res) => {
    res.send("All the user")

});

userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    bcrypt.hash(password, 5, async function (err, hash) {//using bcrypt hashing the password

        if (err) return res.send({ message: "something went wrong", status: 0 })
        try {
            let user = new UserModel({ name, email, password: hash })//saves the password using hash
            await user.save()// function insert a single data into collection of mongodb
            res.send({
                message: "User created",
                status: 1
            })
        } catch (error) {
            res.send({
                message: err.message,
                status: 0
            })
        }
    });
})


userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    // let option = {
    //     expiresIn:"3m"
    // }

    try {
        let data = await UserModel.find({ email })
        if (data.length > 0) {
            let token = jwt.sign({ userId: data[0]._id }, "token");
            jwt.verify(token, "token", function (err, decoded) {
                bcrypt.compare(password, data[0].password, function (err, result) {
                    if (err) return res.send({ message: "Something went wrong" + err, status: 0 });
                    if (result) {
                        res.send({
                            message: "User logged in successfully",
                            token: token,
                            status: 1
                        })
                    } else {
                        res.send({
                            message: "Incorrect Password",
                            status: 0
                        })
                    }
                });
            });
            // bcrypt.compare(password, data[0].password, function (err, result) {
            //     if (err) return res.send({ message: "Something went wrong" + err, status: 0 });
            //     if (result) {
            //         res.send({
            //             message: "User logged in successfully",
            //             token: token,
            //             status: 1
            //         })
            //     } else {
            //         res.send({
            //             message: "Incorrect Password",
            //             status: 0
            //         })
            //     }
            // });
        } else {
            res.send({
                message: "User does not exist",
                status: 0
            })
        }
    } catch (error) {

        res.send({
            message: ErrorEvent.message,
            status: 0
        })
    }
})
module.exports = { userRouter }