const express = require("express");
const data = require("./data");
const postList = require("./views/postList");
const postDetails = require("./views/postDetails");
const { appendFile } = require("fs");

const app = express();
app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res) => {
    const posts = data.list();
    res.send(postList(posts));
});

app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = data.find(id);
    res.send(postDetails(post));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
}); 