# Demo of issues relating to composite typescript project link and yarn pnp

Steps to reproduce the issue:

1. Clone the repo and enter the repo root
2. `yarn && cd b && rm -rf dist && yarn tsc --build --force`
3. Verify that the editor resolves the reference to `b` from `a/src/index.ts`.
4. Comment out the line `nodeLinker: node-modules` in `.yarnrc.yml`, run `yarn`, reload the editor, and observe that the reference to `b` from package `a` is not working.
