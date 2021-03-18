import path from 'path'
import fs from 'fs'
import { isDirectory, isDirectorySync } from 'path-type'

export const ensureDirExists = (dir: string): void => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
}

export const getDirectory = async (filepath: string): Promise<string> => {
    const filePathIsDirectory = await isDirectory(filepath)

    if (filePathIsDirectory) {
        return filepath
    }

    return path.dirname(filepath)
}

export const getDirectorySync = (filepath: string): string => {
    const filePathIsDirectory = isDirectorySync(filepath)

    if (filePathIsDirectory) {
        return filepath
    }

    return path.dirname(filepath)
}
