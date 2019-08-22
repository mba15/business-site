const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    },
    contactLog: [{
        typeOfContact: {
            type: String,
            required: true
        },
        reason: {
            type: String,
            required: true
        },
        note: String,
        
    }]
    
},{
    timestamps: {
      createdAt: "created_at"
    }
})

module.exports = mongoose.model("Contact", contactSchema)