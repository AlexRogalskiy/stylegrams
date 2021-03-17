declare function _exports(wallaby: any): {
    files: (string | {
        pattern: string;
        instrument: boolean;
    })[];
    tests: string[];
    env: {
        type: string;
        runner: string;
    };
    compilers: {
        '**/*.js': any;
    };
    testFramework: string;
};
export = _exports;
//# sourceMappingURL=wallaby.d.ts.map