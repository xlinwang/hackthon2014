/**
 * Created by xwang17 on 11/24/14.
 */

exports.index = function(req, res) {
    return res.json(200, {'data': 'hello'});
};

exports.addItem = function(req, res) {

    console.log("itemId " + req.query.itemId);

    return res.json(200, {'ack': "succeed"});
};
