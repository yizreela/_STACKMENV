const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
    const post = await loadPostCollection();
    res.send(await post.find({}).toArray());
});


router.get('/:search', async (req, res) => {
    const post = await loadPostCollection();
    res.send(await post.find({
        $or: [{ "first_name": new RegExp('.*' + req.params.search + '.*', "i") }, { "last_name": new RegExp('.*' + req.params.search + '.*', "i") }, { "email": new RegExp('.*' + req.params.search + '.*', "i") }, { "city": new RegExp('.*' + req.params.search + '.*', "i") }]
    }).toArray());

});

router.post('/', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.insertOne({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        city: req.body.city
    });
    res.status(200).send();
});

router.delete('/:id', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    });
    res.status(200).send();
});

async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://menv:menv123@cluster0-s3ljd.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
    return client.db('menv').collection('Profile');
}

module.exports = router;