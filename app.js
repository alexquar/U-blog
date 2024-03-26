const express = require('express');
const mongoose = require('mongoose');
const app = express();
const blogRoutes = require('./routes/blogroutes')
//connect to db
const dbURI = 'mongodb+srv://alexanderquarrie:UcwwHYxOj1DEKrLz@blogdb.mdgyuqz.mongodb.net/blogdb';
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({entexted : true}))

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use('/blogs',blogRoutes)


app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});