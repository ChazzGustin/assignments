const express = require("express");
const bountiesRouter = express.Router();
const Bounty = require("../models/bounties");

bountiesRouter.route("/")
    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if(err) return res.status(500).send(err);
        res.send(bounties);
    });
    })
 
    .post((req, res) =>{
        //turns res.body into mongoose doc

    const newBounty = new Bounty(req.body);
        newBounty.save((err, saveBounty) => {
            if(err) return res.status(500).send(err);
        res.send(bounties);
        })
    
 });
    module.exports = bountiesRouter;