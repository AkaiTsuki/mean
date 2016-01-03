/**
 * Created by Jiachi on 12/15/2015.
 */
var autocrud = require('./autocrud-service');

var register = function(){
    autocrud.register({
        url: '/restapi/members',
        entity: {
            firstName: String,
            lastName: String
        },
        uniqueName: 'Member'
    });

    autocrud.register({
        url: '/restapi/students',
        entity: {
            firstName: String,
            lastName: String,
            address: {
                line1: String,
                line2: String,
                zip: String
            }
        },
        uniqueName: 'Student'
    });
};

module.exports = register;