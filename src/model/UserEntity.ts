import { AddressEntity} from "./AddressEntity";
import { CompanyEntity} from "./CompanyEntity";

export interface UserEntity {
    id: number
    name: string
    username: string
    email: string
    address: AddressEntity
    phone: string
    website: string
    company: CompanyEntity
}