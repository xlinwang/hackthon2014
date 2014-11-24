/**
 * Created by xwang17 on 11/24/14.
 */
/**
 * Created by xwang17 on 11/24/14.
 */
'use strict';

var express = require('express');
var controller = require('./watchlist.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/addItem', controller.addItem);



//router.post('/', controller.create);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);

module.exports = router;