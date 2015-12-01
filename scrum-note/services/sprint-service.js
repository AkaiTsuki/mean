/**
 * Created by Jiachi on 11/30/2015.
 */
var Sprint = require('../repository/sprint');

var sprintService = function () {

    var SPRINT_STATUS = {
        PENDING: 'PENDING',
        START: 'START',
        END: 'END',
        SUCCESS: 'SUCCESS',
        FAIL: 'FAIL'
    };

    function __saveSprint(sprintDto, callback) {
        var sprint = new Sprint({
            goal: sprintDto.goal,
            tryThis: sprintDto.tryThis,
            status: SPRINT_STATUS.PENDING
        });

        sprint.save(function (err) {
            if (err) throw err;

            callback(sprint);
        });
    }

    function __listSprints(callback) {
        Sprint.find({}, function (err, sprints) {
            if (err) throw err;
            callback(sprints);
        });
    }

    return {
        saveSprint: __saveSprint,
        listSprints: __listSprints
    };
};

module.exports = sprintService();