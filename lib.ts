export function isUndefined(thing:any){
    return (thing === undefined);
}
export function isDefined(thing:any){
    return !(thing === undefined)
}
export function asString(it:any):string{
    if (it['italics'] !== undefined)
        return <string>it;return undefined;
}
export function asNumber(it:any):number {
    if (it['toFixed'] !== undefined)
        return <number>it;return undefined;
}
export function asArray(it:any):Array<any>{
    if((<Array<any>>it).concat !== undefined)
        return <Array<any>>it;
    return undefined;
}
export function asObject(it:any):Object{
    if (isDefined(it) && !(asString(it) || asArray(it) || asNumber(it)))
        return <Object>it;
    return undefined;
}
export function isIn(obj:any, key:string):boolean{return (key in obj)}

export function el(id:string):HTMLElement {return document.getElementById(id)}