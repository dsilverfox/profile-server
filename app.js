require("dotenv").config();
const Express = require("express");
const app = Express();
const dbConnection = require("./db");
const middleware = require('./middleware');
const controllers = require("./controllers")

//middleware
app.use(middleware.CORS);
app.use(Express.json());

//app.use connections
app.use("/contact", controllers.contactcontroller);
app.use("/contract", controllers.contractcontroller);



//Database Authentication and ReSync for drop tables.
dbConnection.authenticate()
    .then(() => dbConnection.sync())
    // .then(() => dbConnection.sync({force: true}))
    .then(() => {
app.listen(process.env.PORT, () => {
    console.log(`[Sever]: The app is listening on ${process.env.PORT}`)
})
    })
    .catch((err) => {
        console.log(`[Server]: The app has crashed. Error ${err}`)
    })
