import parseJsonType from 'parse-json'
import yamlType from 'yaml'
import importFreshType from 'import-fresh'

import { Optional } from '../typings/types'

export type Config = any

type LoaderResult = Optional<Config>

export type LoaderSync = (filepath: string, content: string) => LoaderResult

export interface LoadersSync {
    [key: string]: LoaderSync
}

let importFresh: typeof importFreshType
const loadJs = (filepath: string): LoaderSync => {
    if (importFresh === undefined) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        importFresh = require('import-fresh')
    }

    return importFresh(filepath)
}

let parseJson: typeof parseJsonType
const loadJson = (filepath: string, content: any): LoaderSync => {
    if (parseJson === undefined) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        parseJson = require('parse-json')
    }

    try {
        return parseJson(content)
    } catch (error) {
        error.message = `JSON Error in ${filepath}:\n${error.message}`
        throw error
    }
}

let yaml: typeof yamlType
const loadYaml = (filepath: string, content: any): LoaderSync => {
    if (yaml === undefined) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        yaml = require('yaml')
    }

    try {
        return yaml.parse(content, { prettyErrors: true })
    } catch (error) {
        error.message = `YAML Error in ${filepath}:\n${error.message}`
        throw error
    }
}

export const loaders: LoadersSync = { loadJs, loadJson, loadYaml }
