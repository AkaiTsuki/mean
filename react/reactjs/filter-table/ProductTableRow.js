/**
 * Created by Jiachi on 1/23/2016.
 */

var React = require('react');

var ProductTableRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.row.id}</td>
                <td>{this.props.row.name}</td>
                <td>{this.props.row.price}</td>
                <td>{this.props.row.stock}</td>
            </tr>
        );
    }
});

module.exports = ProductTableRow;