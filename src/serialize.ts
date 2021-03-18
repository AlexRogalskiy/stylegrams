export const serialize = (
    obj: any,
    callback?: (this: any, key: string, value: any) => any,
    space = 4
): string => {
    // return isFunction(callback) ? JSON.stringify(obj, callback, space) : JSON.stringify(obj)
    return JSON.stringify(obj, callback, space)
}

export const deserialize = (obj: string, callback?: (this: any, key: string, value: any) => any): any => {
    // return isFunction(callback) ? JSON.parse(obj, callback) : JSON.parse(obj)
    return JSON.parse(obj, callback)
}
