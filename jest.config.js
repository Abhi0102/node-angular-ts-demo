module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  testResultsProcessor: 'jest-sonar-reporter',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/*.spec.ts'],
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  modulePathIgnorePatterns: ['<rootDir>/client/'],
};
