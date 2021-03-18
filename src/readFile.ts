import fs from 'fs'

import { Optional } from '../typings/types'

interface Options {
    throwNotFound?: boolean
}

export const fsReadFileAsync = async (pathname: string, encoding: string): Promise<string> => {
    return new Promise((resolve, reject): void => {
        fs.readFile(pathname, encoding, (error, contents): void => {
            if (error) {
                reject(error)
                return
            }

            resolve(contents)
        })
    })
}

export const readFile = async (filepath: string, options: Options = {}): Promise<Optional<string>> => {
    const throwNotFound = options.throwNotFound === true

    try {
        return await fsReadFileAsync(filepath, 'utf8')
    } catch (error) {
        if (!throwNotFound && error.code === 'ENOENT') {
            return null
        }

        throw error
    }
}

export const readFileSync = (filepath: string, options: Options = {}): Optional<string> => {
    const throwNotFound = options.throwNotFound === true

    try {
        return fs.readFileSync(filepath, 'utf8')
    } catch (error) {
        if (!throwNotFound && error.code === 'ENOENT') {
            return null
        }

        throw error
    }
}
