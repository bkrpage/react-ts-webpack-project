import * as React from "react";
import {AddressEntity} from "../../model/AddressEntity";
import {AddressBody} from "../address/AddressBody";


interface UserBodyProps {
    name: string;
    address: AddressEntity;
    phone: string;
    website: string;
}

export class UserBody extends React.Component<UserBodyProps,{}> {
    render() {
        return (
            <>
                <div>
                    Real Name: {this.props.name}
                    <AddressBody address={this.props.address}/>
                    Visit at: {this.props.website} <br />
                    Call: {this.props.phone} <br />
                </div>
            </>
        )
    };
}