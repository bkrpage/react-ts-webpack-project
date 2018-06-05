"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Settings_1 = require("../Settings");
var commentsURL = Settings_1.baseServiceURL + "comments";
var fetchPostComments = function (postId) {
    return fetch(commentsURL + "?userId=" + postId)
        .then(function (response) {
        return (response.json());
    })
        .then(mapToComments);
};
var mapToComments = function (comments) {
    return comments.map(mapToComment);
};
var mapToComment = function (comment) {
    return {
        postId: comment.postId,
        id: comment.id,
        name: comment.name,
        email: comment.email,
        body: comment.body,
    };
};
exports.postService = {
    fetchPostComments: fetchPostComments,
};
//# sourceMappingURL=PostService.js.map