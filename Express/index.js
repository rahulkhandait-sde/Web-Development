const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use ((req, res) => {
    // console.log(req);
    console.log('Request Received');
    // res.send({
    //     name: 'John',
    //     age: 30
    // });
    let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
    res.send(code);
});