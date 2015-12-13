/**
 * Created by Jiachi on 12/13/2015.
 */

var MockApi = require('./mock-api-domain');

var MockApiService = function () {

    function _queryMockData(url, method, callback){
        MockApi.find({apiUrl: url, apiMethod: method}, function (err, mockApis) {
            if (err) throw err;

            if(mockApis.length == 0){
                callback({});
            }else {
                callback(mockApis[0].mockData);
            }
        });
    }

    function _saveMockApi(mockApiDto, callback) {
        var mockApi = new MockApi({
            apiUrl: mockApiDto.apiUrl,
            apiMethod: mockApiDto.apiMethod,
            mockData: mockApiDto.mockData
        });

        mockApi.save(function (err) {
            if (err) {
                throw err;
            }

            callback(_domainToDto(mockApi));
        });
    }

    function _listAll(callback) {
        MockApi.find({}, function (err, mockApis) {
            if (err) throw err;
            callback(mockApis);
        });
    }

    function _domainToDto(domain) {
        return {
            _id: domain._id,
            apiUrl: domain.apiUrl,
            apiMethod: domain.apiMethod,
            mockData: domain.mockData
        };
    }

    return {
        saveMockApi: _saveMockApi,
        listAll: _listAll,
        queryMockData: _queryMockData
    };
};

module.exports = MockApiService();