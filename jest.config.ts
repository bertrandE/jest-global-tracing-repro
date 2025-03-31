import type { Config } from 'jest';

const config: Config = {
    rootDir: 'src',
    transform: {
        "^.+\.tsx?$": ["ts-jest",{}],
    },
    verbose: true,
    testRegex: ['(.+).pact.jest.ts$']
};

export default config;
