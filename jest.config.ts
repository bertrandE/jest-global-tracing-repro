import type { Config } from 'jest';
import presets from 'jest-preset-angular/presets';

const config: Config = {
    rootDir: 'src',
    ...presets.createCjsPreset({tsconfig: '<rootDir>/../tsconfig.jest.json'}),
    verbose: true,
    testRegex: ['(.+).pact.jest.ts$']
};

export default config;
