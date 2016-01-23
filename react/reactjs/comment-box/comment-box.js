/**
 * Created by Jiachi on 1/22/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

// Comment
var Comment = React.createClass({
    rawMarkup: function () {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return {__html: rawMarkup};
    },

    render: function () {
        return (
            <div className="Comment">
                <h2 className="CommentAuthor">{this.props.author}</h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
        );
    }
});

// CommentList Component
var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (data) {
            return (
                <Comment author={data.author} key={data.id}>{data.text}</Comment>
            );
        });

        return (
            <div className="CommentList">
                {commentNodes}
            </div>
        );
    }
});

// CommentForm Component
var CommentForm = React.createClass({
    getInitialState: function() {
        return {author: '', text: ''};
    },
    handleAuthorChange: function(e) {
        this.setState({author: e.target.value});
    },
    handleTextChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        // TODO: send request to the server
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
    },

    render: function () {
        return (
            <div className="CommentForm">
                <form className="commentForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
                    <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} />
                    <input type="submit" value="Post" />
                </form>
            </div>
        );
    }
});

// CommentBox component
var CommentBox = React.createClass({
    // executes exactly once during the lifecycle of the component
    getInitialState: function () {
        return {data: []};
    },

    loadDataFromServer: function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    // called automatically by React after a component is rendered for the first time
    componentDidMount: function () {
        this.loadDataFromServer();
        setInterval(this.loadDataFromServer, this.props.pollInterval);
    },

    handleCommentSubmit: function(comment) {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    render: function () {
        return (
            <div className='CommentBox'>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox url='/api/comments' pollInterval={2000}/>,
    document.getElementById('content')
);