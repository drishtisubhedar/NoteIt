const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { authenticator } = require("../middlewares/authenticator")
const noteRouter = express.Router()
noteRouter.use(authenticator)

noteRouter.get("/",(req,res)=>{
    res.send({
        message: "All the notes",
        status:1
    })

})

noteRouter.post("/create",async(req,res)=>{

    try {
        let note = new NoteModel(req.body)
        await note.save()
        res.send({
            message: "Note created",
            status:1
        })  
    } catch (error) {
        res.send({
            message:error.message,
            status:0
        })
    }
})

module.exports = {
    noteRouter,
}