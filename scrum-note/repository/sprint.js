/**
 * Created by Jiachi on 11/30/2015.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/scrumNote');

var Schema = mongoose.Schema;

var sprintSchema = new Schema({
    name: String,
    createDate: Date,
    updateDate: Date
});

sprintSchema.pre('save', function (next) {
    var current = new Date();

    if (!this.createDate) {
        this.createDate = current;
    }

    this.updateDate = current;

    next();
});


module.exports = mongoose.model('Sprint', sprintSchema);