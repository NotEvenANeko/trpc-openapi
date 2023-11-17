module.exports = {
  testEnvironment: 'node',
  rootDir: './test',
  snapshotFormat: {
    escapeString: true,
    printBasicPrototype: true,
  },
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
};
