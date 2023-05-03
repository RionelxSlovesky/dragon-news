const express = require('express');
const cors = require('cors')
const categories = require('./data/categories.json')
const news = require('./data/news.json')


const app = express()
const port = process.env.PORT || 5000;


app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon is running')
})

app.get('/categories', (req,res) => {
    res.send(categories)
})

app.get('/categories/:Id', (req,res) => {
    const Id = parseInt(req.params.Id)
    if(Id === 0) {
        res.send(news)
    }else {
        const selectedNews = news.filter(n => parseInt(n.category_id) === Id)
        res.send(selectedNews)
    }
    
})

app.get('/news', (req,res) => {
    res.send(news)
})

app.get('/news/:Id', (req,res) => {
    const Id = req.params.Id
    const selectedNews = news.find(n=> n._id === Id)


    res.send(selectedNews)
})

app.listen(port, () => {
    console.log(`Dragon API is running at portL ${port}`)
})