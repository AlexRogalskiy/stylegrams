/**
 * Optional
 * @desc Type representing [`Optional`] in TypeScript: `T | null | undefined`
 */
export type Optional<T> = T | null | undefined

/**
 * StyleOptions
 * @desc Type representing configuration options
 */
export type StyleOptions = {
    sourceFile?: string
    targetPath?: string
    targetFile?: string
    jsonPath?: string
    jsonFields?: string[]
}
