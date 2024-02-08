const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
},{
    versionKey: false,
});

const NoteModel = mongoose.model("note",noteSchema);

module.exports = {
    NoteModel,
};