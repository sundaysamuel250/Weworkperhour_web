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

