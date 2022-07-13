const express = require('express');
const router = express.Router();
const Model = require('../model/podcastModel');


router.post('/add', (req, res) => {
    console.log('add request in user router');

    const data = req.body;
    console.log(data);

    new Model(data).save()
        .then(() => {
            console.log('data sucessfully saved');
            res.status(200).json({ message: 'success' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyemail/:eml', (req, res) => {

    Model.findOne({ email: req.params.eml })
        .then((data) => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
})


router.get('/getall', (req, res) => {

    Model.find({})
        .then((data) => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.delete('/delete/:id', (req, res) => {

    Model.findByIdAndDelete(req.params.id)
        .then((data) => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
})


router.put('/update/:id', (req, res) => {
    console.log(req.body);

    Model.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            console.log('user data updated');
            res.status(200).json({ message: 'success' })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
})


module.exports = router;