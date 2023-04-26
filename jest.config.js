module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/*.spec.ts'],
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  modulePathIgnorePatterns: ['<rootDir>/client/'],
};
