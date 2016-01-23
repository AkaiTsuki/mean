/**
 * Created by Jiachi on 1/23/2016.
 */
var React = require('react');

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

module.exports = ProductTableSearchBox;