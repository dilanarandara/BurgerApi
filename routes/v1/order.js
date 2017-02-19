'use strict';

const express = require('express');
const router = express.Router();

const orderService = require('../../app/services/orderService');

router.post('/', (req, res)=> {
    orderService.create(req.body, (err, data)=> {
        res.setHeader('content-type', 'application/json');

        if (err) {
            res.status(500);
            return res.send({});
        }
        
        res.sendStatus(200);
    });
});

module.exports = router;