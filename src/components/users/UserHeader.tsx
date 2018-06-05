import * as React from "react";


interface UserHeaderProps {
    username: string;
    email: string
}

export class UserHeader extends React.Component<UserHeaderProps,{}> {
    render() {
        return (
            <>
                <h2>{this.props.username}</h2>
                <h3>{this.props.email}</h3>
            </>
        )
    };
}