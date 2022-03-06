const router = require('express').Router();
const models = require('../models');

//Test Route
router.get('/practice', (req, res) => {
    res.send('Hey!! This is a practice route!')
});

//Post Route Contracting
router.post("/contract", async (req, res) => {
    console.log("Request Body:", req.body)
    const { firstname, lastname, email, phone, company, website, message } = req.body.contracts

    try {
        await models.ContractModel.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            company: company,
            website: website,
            message: message,
        })
            .then(
                contract => {
                    res.status(201).json({
                        contract: contract,
                        message: "Contract Request Message Logged"
                    })
                }
            )
    } catch (err) {
        res.status(500).json({
            error: `Failed to log contact: ${err}`
        })
    }
})
module.exports = router;