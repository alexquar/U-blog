const express = require('express');
const Blog = require('../models/blog')
const router = express.Router();

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
  
  router.get('/:id', (req,res)=>{
    const id = req.params.id
    Blog.findById(id).then(result => {
      res.render('details', {blog:result, title : "Blog Details"})
    }).catch(err => console.log(err))
  })
  router.delete('/:id', (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then(result => {
      res.json({redirect:'/blogs'})
    })
  })
  router.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('index', { blogs: result, title: 'All blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  router.post('/', (req,res)=>{
  const blog = new Blog(req.body);
  blog.save().then ( (result)=>{
  res.redirect('/blogs')
  }).catch( err => console.log(err))
  })
  
  router.get('/add-blog', (req, res) => {
    const blog = new Blog({
      title: 'new blog',
      snippet: 'about my new blog',
      body: 'more about my new blog'
    })
  
    blog.save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });



  module.exports = router;