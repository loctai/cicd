const express = require('express');

const templateController = require('../../controllers/template.controller');

const router = express.Router();

router.get('/', templateController.hello);

router.get('/test', (req,res) => {
    res.send("This is test")
});
router.get('/test-app', (req,res) => {
    res.send("This is test")
});
router.get('/test-app1', (req,res) => {
    res.send("This is test app 1")
});
router.get('/test-app2', (req,res) => {
    res.send("This is test app 2 22")
});
module.exports = router;
