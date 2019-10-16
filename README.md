# eslint-config-jadu-style

This package provides Jadu's base JS .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

    ```sh
    npm info "eslint-config-jadu-style@latest" peerDependencies
    ```

    If using **npm 5+**, use this shortcut

    ```sh
    npx install-peerdeps --dev eslint-config-jadu-style
    ```

2. Add `"extends": "jadu-style"` to your .eslintrc.
