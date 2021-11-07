module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    'node_modules/variables/.+\\.{ts|tsx}$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  moduleDirections: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: [
    '/node_modules/',
    'node_modules/(?!variables/.*)',
    '<rootDir>/src/__tests__/utils',
  ],
}