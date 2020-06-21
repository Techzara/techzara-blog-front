class KeyValue{
    public key:string;
    public value:string;
}

const GLOBAL="https://blog.techzara.org/api/"
export const BLOG_LINK=GLOBAL+"blogs";
export const USER_LINK=GLOBAL+"users";


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