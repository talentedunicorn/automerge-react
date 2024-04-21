# React + Automerge

This app is a simple button with incremental counter using [Automerge](https://automerge.org/) for local and remote synchronization of data.

See [quickstart guide](https://automerge.org/docs/quickstart/) for more details.

## Running your own sync server

You may want to run a sync server to handle remote sync; this can be done (in development) using [automerge-repo-sync-server](https://github.com/automerge/automerge-repo-sync-server) package.

Simply run `PORT=[SERVER_PORT] DATA_DIR=[DIR_ON_SERVER_TO_STORE_DATA] npx @automerge/automerge-repo-sync-server` to start an Express server with websocket at `ws://localhost:[PORT]`

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
