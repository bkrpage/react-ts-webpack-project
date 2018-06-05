import * as React from "react";
import {UserEntity} from "../../model/UserEntity";
import {userService} from "../../service/UserService";
import {BaseState} from "../State";
import {UserListItem} from "./UserListItem";

export interface UserListProps {
}

interface State extends BaseState {
    users: UserEntity[];
}

export class UserList extends React.Component<UserListProps, State> {
    constructor(props: UserListProps) {
        super(props);
        this.state = {
            error: null,
            users: null,
            isLoaded: false
        }
    }

    public componentDidMount() {
        userService.fetchUsers()
            .then((users) =>
                    this.setState({users, isLoaded: true}),
                (error) =>
                    this.setState({error, isLoaded: true })
            );
    }

    render() {
        const { error, isLoaded, users } = this.state;
        if (error) {
            return <div>Error</div>
        } else if (!isLoaded) {
            return <div>loading</div>
        } else {
            return (
                <div>
                    <UserListItem users={users}/>
                </div>
            )
        }
    }
}