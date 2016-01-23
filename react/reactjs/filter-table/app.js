/**
 * Created by Jiachi on 1/23/2016.
 */
// React must be required since the compiled code is replace JSX Dom with React.createElement method
var React = require('react');
var ReactDOM = require('react-dom');
var FilterableTable = require('./FilterableTable');

function generateTestProducts(numOfProducts) {
    var products = [];

    for (var i = 1; i <= numOfProducts; i++) {
        products.push({
            id: i, name: "Product-" + i, price: 100.99 + i, stock: 10 + i
        });
    }

    return products;
}

var products1 = generateTestProducts(10);
var products2 = generateTestProducts(5);

var DOMs =
    <div>
        <FilterableTable data={products1}/>
        <FilterableTable data={products2}/>
    </div>;

ReactDOM.render(
    DOMs,
    document.getElementById('app')
);