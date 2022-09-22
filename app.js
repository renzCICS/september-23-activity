const express = require("express");

const app = express();

//register view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const blogs = [
        {title: 'How to read 101', caption: 'You already know how to read'},
        {title: 'How to write 101', caption: 'I teach you how to write'},
        {title: 'How to fight 101', caption: 'Rule 1: do not fight'},
    ];
    res.render('index', { title: 'Home', blogs: blogs });
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
})

app.listen(3000, () => {
    console.log("server is running at port 3000...");
})