import fs from 'fs'

interface Options {
    throwNotFound?: boolean
}

async function fsReadFileAsync(pathname: string, encoding: string): Promise<string> {
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

export const readFile = async (filepath: string, options: Options = {}): Promise<string | null> => {
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

export const readFileSync = (filepath: string, options: Options = {}): string | null => {
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
