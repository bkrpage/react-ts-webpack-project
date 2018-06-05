"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Settings_1 = require("../Settings");
var usersURL = Settings_1.baseServiceURL + "users/";
var postsURL = Settings_1.baseServiceURL + "posts";
var fetchUser = function (id) {
    return fetch(usersURL + id)
        .then(function (response) {
        return (response.json());
    })
        .then(mapToUser);
};
var fetchUserByUsername = function (username) {
    var usersWithName = fetchUsers()
        .then(function (users) { return (users.filter(function (user) { return (user.username == username); })); });
    return usersWithName
        .then(mapToUser);
};
var fetchUsers = function () {
    return fetch(usersURL)
        .then(function (response) {
        return (response.json());
    })
        .then(mapToUsers);
};
var fetchUserPosts = function (userId) {
    return fetch(postsURL + "?userId=" + userId)
        .then(function (response) {
        return (response.json());
    })
        .then(mapToPosts);
};
var mapToUsers = function (users) {
    return users.map(mapToUser);
};
var mapToUser = function (user) {
    return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        address: user.address,
        phone: user.phone,
        website: user.website,
        company: user.company
    };
};
var mapToPosts = function (posts) {
    return posts.map(mapToPost);
};
var mapToPost = function (post) {
    return {
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body
    };
};
exports.userService = {
    fetchUser: fetchUser,
    fetchUsers: fetchUsers,
    fetchUserByUsername: fetchUserByUsername,
    fetchUserPosts: fetchUserPosts,
};
//# sourceMappingURL=UserService.js.map