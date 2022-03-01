const router = require('express').Router();
const models = require('../models');

//Test Route
router.get('/practice', (req, res) => {
    res.send('Hey!! This is a practice route!')
});

//Post Route
router.post("/contact", async (req, res) => {
    console.log("Request Body:", req.body)
    const {firstname, lastname, email, phone, company, message} = req.body.contacts
    
    try {
            await models.ContactModel.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            company: company,
            message: message,
        })
        .then(
            contact => {
                res.status(201).json({
                    contact: contact,
                    message: "Contact Logged"
                })
            }
        )
    } catch (err) {
        res.status(500).json({
            error: `Failed to log contact: ${err}`
        })
    }
} )
module.exports = router;