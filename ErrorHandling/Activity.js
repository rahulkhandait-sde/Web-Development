const ExpressError = require("./ExpressError")



app.get('/admin', (req, res) => {
    throw New ExpressError('You are not an admin', 403)
})