const express = require('express')

const app = express();

app.set('view engine', 'ejs')

const listen = app.listen(3000);

app.get('/', (req,res)=>{
res.render('index')
})

app.get('/about', (req,res)=>{
    res.render('about')
    })

app.get('/blogs/create', (req,res)=>{
        res.render('create')
        })

//fires on all requests but only if it makes it here (misses all get handlers)
app.use((req,res)=>{
res.status(404).render('404')
})