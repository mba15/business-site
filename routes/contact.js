//building out full crud preemptively. MVP will only be using Post Requests.
//Future phases will work with a custom backend for the customer to work with the database info.

const express = require("express");
const contactRouter = express.Router();
const contactModel = require("../models/contact.js");

contactRouter.route("/")
    .post((req, res) => {
        let newContact = new contactModel((req.body));
        newContact.save((err, savedContact) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(savedContact);
            }
        });
    })
    .get((req, res) => {
        contactModel.find((err, foundContacts) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(foundContacts);
            }
        });
    });

contactRouter.route("/:id")
    .get((req, res) => {
        let { id } = req.params;
        contactModel.findById(id, (err, foundContact) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(foundContact);
            }
        });
    })
    .delete((req, res) => {
        let { id } = req.params;
        contactModel.findByIdAndRemove(id, (err, removedContact) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(removedContact);
            }
        });
    })
    .put((req, res) => {
        let { id } = req.params;
        contactModel.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedContact) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(updatedContact)
            }
        });
    });
contactRouter.route("/:id/contactlog")
    .post((req, res) => {
        contactModel.findByIdAndUpdate(req.params.id, { $push: { contactLog: req.body}}, {new: true}, (err, updatedContact) => {
            if(err) {
                return res.status(500).send(err);
            } else {
                res.send(updatedContact)
            }
        });
    });

module.exports = contactRouter;