/**
 * Created by Jiachi on 1/23/2016.
 */

var React = require('react');
var ProductTableBody = require('./ProductTableBody');

var ProductTable = React.createClass({

    getFilteredProducts: function () {

        var filterText = this.props.filterText;

        if (!filterText) {
            return this.props.data;
        }

        return this.props.data.filter(function (product) {
            return product.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1;
        });
    },

    render: function () {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
                </thead>
                <ProductTableBody data={this.getFilteredProducts()}/>
            </table>
        );
    }
});

module.exports = ProductTable;