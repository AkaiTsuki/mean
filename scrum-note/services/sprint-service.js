/**
 * Created by Jiachi on 11/30/2015.
 */
var Sprint = require('../repository/sprint');

var sprintService = function () {

    function __saveSprint(sprintDto, callback) {
        var sprint = new Sprint({
            name: sprintDto.name
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