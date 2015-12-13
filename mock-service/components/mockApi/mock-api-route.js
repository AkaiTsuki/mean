/**
 * Created by Jiachi on 12/13/2015.
 */
var express = require('express');
var router = express.Router();
var mockApiService = require('./mock-api-service');

router.get('/list', function (req, res, next) {
    mockApiService.listAll(function (mockedApis) {
        res.json(mockedApis);
    });
});

router.post('/create', function (req, res, next) {
    var mockApi = req.body.mockApi;
    mockApiService.saveMockApi(mockApi, function (savedMockApi) {
        res.json(savedMockApi);
    });
});

router.post('/query', function(req, res){
    var query = req.body;
    mockApiService.queryMockData(query.url, query.method, function (mockData) {
        res.json(mockData);
    });
});

module.exports = router;

