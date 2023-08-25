const express = require('express');
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// app.use ((req, res) => {
//     // console.log(req);
//     console.log('Request Received');
//     // res.send({
//     //     name: 'John',
//     //     age: 30
//     // });
//     let code = "<h1>Required Fruits</h1><ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
//     res.send(code);
// });

app.get('/', (req, res) => {
    res.send('Hello, I am root page');
});

// app.get('/about', (req, res) => {
//     res.send('About Page');
// });

// app.get("/:username", (
//     req, res) => {
//     let {username} = req.params;
//     let htmlStr = `<h1> Welcome to the page of @${username}.<h1>`
//     res.send(htmlStr)
// });

app.get('/search', (req, res) => {
    let {q} = req.query;
    if (!q) {
        res.send('<h1>Nothing found if nothing searched</h1>');
    }
    let htmlStr = `<h1>Search results for: ${q}</h1>`;
    res.send(htmlStr);
});