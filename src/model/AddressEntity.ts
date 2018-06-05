export interface AddressEntity {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
        lat: string
        long: string
    }
}