# Simple project for testing Truffle

Truffle releases after `v5.0.13` have problems deploying contracts to the public test networks like Ropsten. This project allows the Truffle team to replicate these problems.

This project was created by running
```bash
truffle init
truffle unbox metacoin
```

The [truffle-config.js](./truffle-config.js) file is added to allow deployments to Ropsten.

Run the following to deploy to the Ropsten test network
```bash
npx truffle deploy --reset --network ropsten
```

This requires [npx](https://www.npmjs.com/package/npx) to be installed globally with the following. npx allows binaries installed in the project to be executed rather than a globally installed binary that can be a different version.
```bash
npm install -g npx
```
