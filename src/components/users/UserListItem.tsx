import * as React from "react";
import {UserEntity} from "../../model/UserEntity";
import {Link} from "react-router-dom";


interface UserListItemProps {
    users: UserEntity[];
}

export class UserListItem extends React.Component<UserListItemProps, {}> {
    render() {
        return (
            <>
                <ul>
                    {
                        this.props.users.map((user: UserEntity) => (
                            <li key={user.id}>
                                <Link to={`/users/${user.id}`}>{user.name}</Link>
                                <Link to={`/users/${user.username}`}>{user.name}(by name)</Link>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    };
}