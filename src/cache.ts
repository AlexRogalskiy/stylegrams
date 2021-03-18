import { Optional } from '../typings/types'

export type CacheResult = {
    config: any
    filepath: string
    isEmpty?: boolean
}

export type Cache = Map<string, Optional<CacheResult>>

export const cacheWrapper = async (
    cache: Cache,
    key: string,
    fn: () => Promise<Optional<CacheResult>>
): Promise<Optional<CacheResult>> => {
    const cached = cache.get(key)
    if (cached !== undefined) {
        return cached
    }

    const result = await fn()
    cache.set(key, result)

    return result
}

export const cacheWrapperSync = (
    cache: Cache,
    key: string,
    fn: () => Optional<CacheResult>
): Optional<CacheResult> => {
    const cached = cache.get(key)
    if (cached !== undefined) {
        return cached
    }

    const result = fn()
    cache.set(key, result)

    return result
}
