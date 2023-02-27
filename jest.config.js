/* eslint-disable no-undef */
module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};
