export const toString = (value: string | string[]): string => (Array.isArray(value) ? value[0] : value)

export const hasPrototypeProperty = (obj: any, name: string): boolean => {
    return !obj.hasOwnProperty(name) && name in obj
}

export const hasProperty = (obj: any, prop: PropertyKey): boolean => {
    const proto = obj.__proto__ || obj.constructor.prototype

    //return (prop in obj) && (!(prop in proto) || proto[prop] !== obj[prop]);
    return prop in obj || prop in proto || proto[prop] === obj[prop]
}

export const getPropertyByKeys = <T>(obj: T, keys: PropertyKey[]): any => {
    for (const key of keys) {
        obj = obj && obj[key]
    }

    return obj
}

export const setPropertyByKeys = <T>(obj: T, value: any, keys: PropertyKey[]): void => {
    const lastIndex = keys.length - 1
    const prop = keys[lastIndex]

    keys = keys.slice(0, lastIndex)
    for (const key of keys) {
        obj = obj && obj[key]
    }

    obj[prop] = value
}
