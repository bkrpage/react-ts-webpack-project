import * as React from "react";
import {AddressEntity} from "../../model/AddressEntity";


interface AddressBodyProps {
    address: AddressEntity
}

export class AddressBody extends React.Component<AddressBodyProps,{}> {
    render() {
        return (
            <>
                <address>
                    <h3>Address</h3>
                    {this.props.address.suite}<br/>
                    {this.props.address.street}<br/>
                    {this.props.address.city}<br/>
                    {this.props.address.zipcode}<br/>
                    <h3>Location</h3>
                    Lat: {this.props.address.geo.lat}, Long: {this.props.address.geo.long}<br />
                </address>
            </>
        )
    };
}