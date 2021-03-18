import path from 'path'
import { isDirectory, isDirectorySync } from 'path-type'

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
