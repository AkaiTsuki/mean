/**
 * Created by Jiachi on 1/23/2016.
 */

var React = require('react');
var ProductTable = require('./ProductTable');
var ProductTableSearchBox = require('./ProductTableSearchBox');

var FilterableTable = React.createClass({
    getInitialState: function () {
        return {text: ''}
    },

    onFilterChange: function (filterText) {
        this.setState({text: filterText});
    },

    render: function () {
        return (
            <div className="FilterableTable">
                <h1>Filterable Table Demo</h1>
                <ProductTableSearchBox searchText={this.state.text} onChange={this.onFilterChange}/>
                <ProductTable data={this.props.data} filterText={this.state.text}/>
            </div>
        );
    }
});

module.exports = FilterableTable;