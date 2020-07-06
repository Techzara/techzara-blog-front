import { utils } from 'protractor';

class KeyValue{
    public key:string;
    public value:string;
}

export const USERNAME_KEY="TECHZARA_USERNAME";
export const TOKEN_KEY="SESSION_TOKEN";
export const IRI_USER_KEY="IRI_USER";
export const UUID_KEY="UUID_USER";

const GLOBAL="https://techzara.org/api/"
export const BLOG_LINK=GLOBAL+"blogs";
export const COMMENT_LINK=GLOBAL+"comments"
export const REACTION_LINK=GLOBAL+"reactions"
export const TAG_LINK=GLOBAL+"tags";
export const USER_LINK=GLOBAL+"users";
export const MEDIA_LINK=GLOBAL+"media_objects";
export const HEADERS={
    'Content-Type':'application/json',
    'Authorization':'Bearer '+localStorage.getItem(TOKEN_KEY)
};

export const logout= ()=>{
    localStorage.removeItem(USERNAME_KEY)
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(IRI_USER_KEY)
    localStorage.removeItem(UUID_KEY)
    location.assign("/")
}

export const expired=(err)=>{
    if(err.error.code==401){
        logout()
    }
}

/**
 * @param array: Array<KeyValue>
 * Génère un parametre d'url du type ?key=value&key=value...
 * @returns string
 */
export function generateParams(array:Array<KeyValue>):string{
    var params=new URLSearchParams();
    for(let i=0;i<array.length;i++)
        params.append(array[i].key,array[i].value);
    return "?"+params.toString();
}