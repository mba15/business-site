const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    contact: {
        type: String,
        required: false
    },
    reason: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: false
    },
    
    result: {
        type: String,
        required: false
    },
    contactLog: {
        type: [mongoose.Schema.Types.ObjectId], 
        ref: "Contact"
    }

},{
    timestamps: {
      createdAt: "created_at"
    }
})

module.exports=mongoose.model("Client", clientSchema);