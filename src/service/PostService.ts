
import {baseServiceURL} from "../Settings";

const commentsURL = baseServiceURL + "comments";

const fetchPostComments = (postId: number): Promise<CommentEntity[]> => {
    return fetch(`${commentsURL}?userId=${postId}`)
        .then((response) =>
            (response.json()))
        .then(mapToComments)
};

const mapToComments = (comments: any[]): CommentEntity[] => {
    return comments.map(mapToComment)
};

const mapToComment = (comment: any): CommentEntity => {
    return {
        postId: comment.postId,
        id: comment.id,
        name: comment.name,
        email: comment.email,
        body: comment.body,
    };
};


export const postService = {
    fetchPostComments,
};