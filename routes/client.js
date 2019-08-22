const express = require("express");
const clientRouter = express.Router();
const contactModel = require("../models/contact.js");

clientRouter.route("/cont")
    .post((req, res) => {
        let newClientContact = new clientModel((req.body));
        newClientContact.save((err,savedClientContact) => {
            if(err){
                console.error(err);
            } else {
                res.send(savedClientContact);
            }
        });
    })
    .get((req,res) => {
        clientModel.find((err, foundClient) => {
            if(err) {
                console.error(err);
            } else {
                res.send(foundClient);
            }
        });
    });

clientRouter.route("/:id")
    .get((req, res) => {
        let {id} = req.params;
        clientModel.findById({_id: id}, (err, foundClient) => {
            if(err) {
                console.error(err);
            } else {
                res.send(foundClient);
            }
        });
    });
    
module.exports = clientRouter;