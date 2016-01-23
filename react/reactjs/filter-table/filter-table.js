/**
 * Created by Jiachi on 1/23/2016.
 */

var React = require('react');
var ReactDOM = require('react-dom');

function generateTestProducts(numOfProducts) {
    var products = [];

    for (var i = 1; i <= numOfProducts; i++) {
        products.push({
            id: i, name: "Product-" + i, price: 100.99 + i, stock: 10 + i
        });
    }

    return products;
}

var products = generateTestProducts(10000);

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

var ProductTableSearchBox = React.createClass({
    onChange: function () {
        this.props.onChange(this.refs.filterTextInput.value);
    },
    render: function () {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <label className="sr-only" htmlFor="ProductTableSearchBoxTextField">Product Name</label>
                    <input className="form-control" type="text" id="ProductTableSearchBoxTextField" ref="filterTextInput"
                           onChange={this.onChange}
                           placeholder="Search by Product Name"/>
                </div>
            </form>
        );
    }
});

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
                <ProductTable data={products} filterText={this.state.text}/>
            </div>
        );
    }
});

ReactDOM.render(
    <FilterableTable data={products}/>,
    document.getElementById('app')
);