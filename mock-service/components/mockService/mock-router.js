/**
 * Created by Jiachi on 12/13/2015.
 */

/**
 * Created by Jiachi on 12/13/2015.
 */
var express = require('express');
var router = express.Router();
var mockApiService = require('../mockApi/mock-api-service');

function getRequestUrl(url) {
    var tokens = url.split('/');
    var targetUrl = "";
    for(var i= 2; i<tokens.length; i++){
        targetUrl += "/"+tokens[i];
    }
    return targetUrl;
}

router.get(/\/(.)*/, function (req, res, next) {
    var url = getRequestUrl(req.originalUrl);
    console.log("Query api: "+ url + req.method);
    mockApiService.queryMockData(url, 'GET', function (data) {
        res.json(data);
    });
});

router.post(/\/(.)*/, function (req, res, next) {
    var url = getRequestUrl(req.originalUrl);

    mockApiService.queryMockData(url, 'POST', function (data) {
        res.json(data);
    });
});

router.put(/\/(.)*/, function (req, res, next) {
    var url = getRequestUrl(req.originalUrl);

    mockApiService.queryMockData(url, 'PUT', function (data) {
        res.json(data);
    });
});

router.delete(/\/(.)*/, function (req, res, next) {
    var url = getRequestUrl(req.originalUrl);

    mockApiService.queryMockData(url, 'DELETE', function (data) {
        res.json(data);
    });
});

module.exports = router;

