import { iSocial } from "./social";

export interface iProfile {
        "id"?: number,
        "name"?: string,
        "email"?: string,
        "status"?: string,
        "role"?: string,
        "address"?:  string,
        "phone_no"?: string,
        "avatar"?: string,
        "bio"?: string,
        "country"?: string,
        "city"?: string,
        "state"?:  string,
        "social_medias"?: iSocial[]
}
export interface iProfileCompany {
        "id"?: number,
        "name"?: string,
        "email"?: string,
        "status"?: string,
        "role"?: string,
        "address"?:  string,
        "phone_no"?: string,
        "avatar"?: string,
        "about_company"?: string,
        "founded"?: string,
        "industry"?: string,
        "country"?: string,
        "company"?: string,
        "website"?: string,
        "zipcode"?: string,
        "city"?: string,
        "state"?:  string,
        "wallet"?:  string,
        "company_size"?:  string,
        "social_medias"?: iSocial[]
}

