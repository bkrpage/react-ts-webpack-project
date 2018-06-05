import * as React from "react";
import {UserEntity} from "../../model/UserEntity";
import {UserHeader} from "./UserHeader";
import {userService} from "../../service/UserService";
import {BaseState} from "../State";
import {UserBody} from "./UserBody";
import {UserPosts} from "../posts/Post";
import {RouteComponentProps} from "react-router";


//Param interface for passing URL params from Routes
interface UserPageParams {
    id?: number;
    username?: string;
}


// Extends RouteComponentProps with Params populated so UserPageProps can be used alongside the router props
interface UserPageProps extends RouteComponentProps<UserPageParams> {
}

interface State extends BaseState {
    user: UserEntity;
}

export class UserPage extends React.Component<UserPageProps, State> {
    constructor(props: UserPageProps) {
        super(props);
        this.state = {
            error: null,
            user: null,
            isLoaded: false
        }
    }

    public componentDidMount() {
        let user;

        if (this.props.match.params.id !== undefined)
            user = userService.fetchUser(this.props.match.params.id);
        if (this.props.match.params.username !== undefined)
            user = userService.fetchUserByUsername(this.props.match.params.username);

        user.then((user) =>
                this.setState({user, isLoaded: true}),
            (error) =>
                this.setState({error, isLoaded: true})
        );
    }

    render() {
        const { error, isLoaded, user } = this.state;
        if (error) {
            return <div>Error</div>
        } else if (!isLoaded) {
            return <div>loading</div>
        } else {
            return (
                <div>
                    <UserHeader username={user.username} email={user.email} />
                    <UserBody name={user.name} address={user.address} phone={user.phone} website={user.website}/>
                    <UserPosts userId={user.id}/>
                </div>
            )
        }
    }
}