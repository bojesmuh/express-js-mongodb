const Customer_model = require("../models/Customer_model");


/**
* Fungsi Test
*/
exports.test = function (req, res) {
    res.send('Yeeee Berhasil!!');
};

/**
* Fungsi List
*/
exports.list = function (req,res,next) {
    Customer_model.find(function(err, Customer_model){
        if(err) {
            return next(err);
        }
        res.json(Customer_model);
    });
};

/**
* Fungsi create
*/
exports.customer_create = function (req, res,next) {
    let customer = new Customer_model({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    });
    
    customer.save(function (err) {
        if (err) {
            return next(err);
        } else {
            res.header('Content-Type', 'application/json');
            res.json({
                "code":"000",
                "msg" : "success",
                "data":customer
            });
        };
    });
};

/**
 * Fungsi Detail
 */
exports.customer_details = function (req, res,next) {
    Customer_model.findById(req.params.id, function (err, customer) {
        if (err) return next(err);
        res.header('Content-Type', 'application/json');
        res.json({
            "code":"000",
            "msg":"success",
            "data":customer
        });
    })
};

/**
 * Fungsi Update
 */
exports.customer_update = function (req, res,next) {
    Customer_model.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, customer) {
        if (err) return next(err);
        res.header('Content-Type', 'application/json');
        res.json({
            "code":"000",
            "msg":"success",
            "data":customer
        });
    });
};

/**
 * Fungsi Delete
 */
exports.customer_delete = function (req, res,next) {
    Customer_model.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.header('Content-Type', 'application/json');
        res.json({
            "code":"000",
            "msg" : "success"
        });
    })
};