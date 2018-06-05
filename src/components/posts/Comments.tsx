import {BaseState} from "../State";
import * as React from "react";
import {postService} from "../../service/PostService";


interface PostCommentsProps {
    postId: number;
}

interface PostCommentsState extends BaseState {
    comments: CommentEntity[];
}

export class PostComments extends React.Component<PostCommentsProps, PostCommentsState> {
    constructor(props: PostCommentsProps) {
        super(props);
        this.state = {
            error: null,
            comments: null,
            isLoaded: false
        }
    }

    public componentDidMount() {
        postService.fetchPostComments(this.props.postId)
            .then((comments) =>
                    this.setState({comments, isLoaded: true}),
                (error) =>
                    this.setState({error, isLoaded: true })
            );
    }

    public render() {
        const { error, isLoaded, comments } = this.state;
        if (error) {
            return <div>Error</div>
        } else if (!isLoaded) {
            return <div>loading</div>
        } else {
            return (
                <div>
                    <h2> Comments </h2>
                    {
                        comments.map((comment) =>
                            <PostComment key={comment.id} comment={comment}/>
                        )
                    }
                </div>
            )
        }
    }
}

interface PostCommentProps {
    comment: CommentEntity;
}

class PostComment extends React.Component<PostCommentProps, {}> {

    render() {
        return (
            <CommentRow>
                name: {this.props.comment.name}<br />
                email: {this.props.comment.email}<br />
                message: {this.props.comment.body}<br />
            </CommentRow>
        )
    };
}

class CommentRow extends React.Component<{}, {}> {
    render() {
        return (
            <div className="postComment">{this.props.children}</div>
        )
    };
}