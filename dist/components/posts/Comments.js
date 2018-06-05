"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PostService_1 = require("../../service/PostService");
var PostComments = /** @class */ (function (_super) {
    __extends(PostComments, _super);
    function PostComments(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: null,
            comments: null,
            isLoaded: false
        };
        return _this;
    }
    PostComments.prototype.componentDidMount = function () {
        var _this = this;
        PostService_1.postService.fetchPostComments(this.props.postId)
            .then(function (comments) {
            return _this.setState({ comments: comments, isLoaded: true });
        }, function (error) {
            return _this.setState({ error: error, isLoaded: true });
        });
    };
    PostComments.prototype.render = function () {
        var _a = this.state, error = _a.error, isLoaded = _a.isLoaded, comments = _a.comments;
        if (error) {
            return React.createElement("div", null, "Error");
        }
        else if (!isLoaded) {
            return React.createElement("div", null, "loading");
        }
        else {
            return (React.createElement("div", null,
                React.createElement("h2", null, " Comments "),
                comments.map(function (comment) {
                    return React.createElement(PostComment, { key: comment.id, comment: comment });
                })));
        }
    };
    return PostComments;
}(React.Component));
exports.PostComments = PostComments;
var PostComment = /** @class */ (function (_super) {
    __extends(PostComment, _super);
    function PostComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostComment.prototype.render = function () {
        return (React.createElement(CommentRow, null,
            "name: ",
            this.props.comment.name,
            React.createElement("br", null),
            "email: ",
            this.props.comment.email,
            React.createElement("br", null),
            "message: ",
            this.props.comment.body,
            React.createElement("br", null)));
    };
    ;
    return PostComment;
}(React.Component));
var CommentRow = /** @class */ (function (_super) {
    __extends(CommentRow, _super);
    function CommentRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommentRow.prototype.render = function () {
        return (React.createElement("div", { className: "postComment" }, this.props.children));
    };
    ;
    return CommentRow;
}(React.Component));
//# sourceMappingURL=Comments.js.map