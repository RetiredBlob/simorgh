const { jestDirAlias } = require('./dirAlias');

module.exports = {
  projects: [
    {
      reporters: [
        'default',
        [
          'jest-junit',
          {
            suiteName: 'Unit Tests',
            outputDirectory: 'reports/jest',
            uniqueOutputName: 'true',
            ancestorSeparator: ' › ',
          },
        ],
      ],
      collectCoverageFrom: [
        '**/(src|scripts)/**/*.{js,jsx}',
        '!**/src/testHelpers/**',
        '!**/*.stories.jsx',
        '!**/src/integration/**/*.{js,jsx}',
      ],
      setupFiles: ['./src/testHelpers/jest-setup.js'],
      testMatch: [
        '**/__tests__/**/*.js?(x)',
        '**/?(*.)+(spec|test).js?(x)',
        '!**/src/integration/**/*.{js,jsx}',
      ],
      snapshotSerializers: ['enzyme-to-json/serializer'],
      setupFilesAfterEnv: ['./src/testHelpers/setupTests.js'],
      moduleNameMapper: jestDirAlias,
      transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.jsx$': 'babel-jest',
      },
    },
    {
      displayName: 'Integration Tests',
      testEnvironment: './src/integration/integrationTestEnvironment.js',
      reporters: [
        'default',
        [
          'jest-junit',
          {
            suiteName: 'Integration Tests',
            outputDirectory: 'reports/jest',
            uniqueOutputName: 'true',
            ancestorSeparator: ' › ',
          },
        ],
      ],
      collectCoverageFrom: ['**/src/integration/**/*.{js,jsx}'],
      setupFiles: ['./src/testHelpers/jest-setup.js'],
      testMatch: ['**/src/integration/**/*.test.{js,jsx}'],
      snapshotSerializers: ['enzyme-to-json/serializer'],
      setupFilesAfterEnv: ['./src/testHelpers/setupTests.js'],
      moduleNameMapper: jestDirAlias,
      transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.jsx$': 'babel-jest',
      },
    },
  ],
};
