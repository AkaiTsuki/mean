/**
 * Created by Jiachi on 12/13/2015.
 */


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mockService');

var Schema = mongoose.Schema;

var mockApiSchema = new Schema({
    apiUrl: String,
    apiMethod: String,
    mockDataType: String,
    mockData: Schema.Types.Mixed
});

module.exports = mongoose.model('MockApi', mockApiSchema);