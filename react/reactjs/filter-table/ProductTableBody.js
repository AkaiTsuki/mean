/**
 * Created by Jiachi on 1/23/2016.
 */

var React = require('react');
var ProductTableRow = require('./ProductTableRow');

var ProductTableBody = React.createClass({
    render: function () {
        var rows = this.props.data.map(function (row) {
            return (
                <ProductTableRow row={row} key={row.id}/>
            );
        });

        return (
            <tbody>
            {rows}
            </tbody>
        );
    }
});

module.exports = ProductTableBody;