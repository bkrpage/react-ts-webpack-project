import * as React from "react";
import {userService} from "../../service/UserService";
import {BaseState} from "../State";
import {PostEntity} from "../../model/PostEntity";
import {PostComments} from "./Comments";


interface UserPostProps {
    userId: number;
}

interface UserPostState extends BaseState {
    posts: PostEntity[];
}

export class UserPosts extends React.Component<UserPostProps, UserPostState> {
    constructor(props: UserPostProps) {
        super(props);
        this.state = {
            error: null,
            posts: null,
            isLoaded: false
        }
    }

    public componentDidMount() {
        userService.fetchUserPosts(this.props.userId)
            .then((posts) =>
                    this.setState({posts, isLoaded: true}),
                (error) =>
                    this.setState({error, isLoaded: true })
            );
    }

    public render() {
        const { error, isLoaded, posts } = this.state;
        if (error) {
            return <div>Error</div>
        } else if (!isLoaded) {
            return <div>loading</div>
        } else {
            return (
                <div>
                    {
                        posts.map((post) =>
                            <Post key={post.id} post={post}/>
                        )
                    }
                </div>
            )
        }
    }
}


interface PostProps{
    post: PostEntity;
}

class Post extends React.Component<PostProps, {}> {
    render() {
        return (
            <PostRow>
                <h2>{this.props.post.title}</h2>
                <article>
                    {this.props.post.body}
                </article>
                <PostComments postId={this.props.post.id}/>
            </PostRow>
        )
    };
}



class PostRow extends  React.Component<{},{}> {
    render() {
        return (
            <div className="post">{this.props.children}</div>
        )
    }
}