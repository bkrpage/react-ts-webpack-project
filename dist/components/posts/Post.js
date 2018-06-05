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
var UserService_1 = require("../../service/UserService");
var Comments_1 = require("./Comments");
var UserPosts = /** @class */ (function (_super) {
    __extends(UserPosts, _super);
    function UserPosts(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: null,
            posts: null,
            isLoaded: false
        };
        return _this;
    }
    UserPosts.prototype.componentDidMount = function () {
        var _this = this;
        UserService_1.userService.fetchUserPosts(this.props.userId)
            .then(function (posts) {
            return _this.setState({ posts: posts, isLoaded: true });
        }, function (error) {
            return _this.setState({ error: error, isLoaded: true });
        });
    };
    UserPosts.prototype.render = function () {
        var _a = this.state, error = _a.error, isLoaded = _a.isLoaded, posts = _a.posts;
        if (error) {
            return React.createElement("div", null, "Error");
        }
        else if (!isLoaded) {
            return React.createElement("div", null, "loading");
        }
        else {
            return (React.createElement("div", null, posts.map(function (post) {
                return React.createElement(Post, { key: post.id, post: post });
            })));
        }
    };
    return UserPosts;
}(React.Component));
exports.UserPosts = UserPosts;
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Post.prototype.render = function () {
        return (React.createElement(PostRow, null,
            React.createElement("h2", null, this.props.post.title),
            React.createElement("article", null, this.props.post.body),
            React.createElement(Comments_1.PostComments, { postId: this.props.post.id })));
    };
    ;
    return Post;
}(React.Component));
var PostRow = /** @class */ (function (_super) {
    __extends(PostRow, _super);
    function PostRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostRow.prototype.render = function () {
        return (React.createElement("div", { className: "post" }, this.props.children));
    };
    return PostRow;
}(React.Component));
//# sourceMappingURL=Post.js.map