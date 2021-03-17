module.exports = {
    roots: ['<rootDir>/tests/'],
    verbose: true,
    clearMocks: true,
    resetModules: true,
    resetMocks: true,
    restoreMocks: true,

    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'node',
    testMatch: ['**/*.test.(ts|js)', '**/__tests__/**/?(*.)+(spec|test).ts'],
    testRunner: 'jest-circus/runner',
    testPathIgnorePatterns: ['/node_modules/', '/__fixtures__/', '/spec/'],
    transform: {
        '^.+\\.(ts)$': 'ts-jest',
    },

    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,ts}',
        '!**/*.d.ts',
        '!**/*.folio.{js,ts}',
        '!**/*.spec.{js,ts}',
        '!**/dist/**',
        '!**/node_modules/**',
        '!**/vendor/**',
        '!**/generated/**',
        '!**/__fixtures__/**',
        '!**/scenarios/**',
        '!**/redirects/**',
    ],
    coverageThreshold: {
        global: {
            branches: 4,
            functions: 4,
            lines: 4,
            statements: 4,
        },
    },
    coverageDirectory: './coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
}
