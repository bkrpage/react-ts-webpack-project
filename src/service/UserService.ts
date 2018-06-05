import {UserEntity} from "../model/UserEntity";
import {baseServiceURL} from "../Settings";
import {PostEntity} from "../model/PostEntity";

const usersURL = baseServiceURL + "users/";
const postsURL = baseServiceURL + "posts"

const fetchUser = (id: number): Promise<UserEntity> => {
    return fetch(usersURL + id)
        .then((response) =>
            (response.json()))
        .then(mapToUser)
};

const fetchUserByUsername = (username: string): Promise<UserEntity> => {
    let usersWithName = fetchUsers()
        .then((users: UserEntity[]) => (
            users.filter ((user: UserEntity) => (
                user.username == username
            ))
            )
        );

    return usersWithName
        .then(mapToUser)
};

const fetchUsers = (): Promise<UserEntity[]> => {
    return fetch(usersURL)
        .then((response) =>
            (response.json()))
        .then(mapToUsers)
};

const fetchUserPosts = (userId: number): Promise<PostEntity[]> => {
    return fetch(`${postsURL}?userId=${userId}`)
        .then((response) =>
            (response.json()))
        .then(mapToPosts)
}


const mapToUsers = (users: any[]): UserEntity[] => {
    return users.map(mapToUser);
};

const mapToUser = (user: any): UserEntity => {
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

const mapToPosts = (posts: any[]): PostEntity[] => {
    return posts.map(mapToPost)
}

const mapToPost = (post: any): PostEntity => {
    return {
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body
    };
}


export const userService = {
    fetchUser,
    fetchUsers,
    fetchUserByUsername,
    fetchUserPosts,
};