// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',                  // Use ts-jest preset for TypeScript support
  testEnvironment: 'node',             // Node environment
  testMatch: ['**/*.test.ts'],         // Match test files with .test.ts extension
  moduleFileExtensions: ['ts', 'js'],  // Recognize both .ts and .js files
  clearMocks: true,
  verbose: true,
};

export default config;
