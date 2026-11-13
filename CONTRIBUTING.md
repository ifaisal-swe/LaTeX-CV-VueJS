# Contributing

Thanks for helping out!

1. Fork and clone the repo, then run `pnpm install` (Node ≥ 22.12, pnpm 10).
2. Create a branch: `git checkout -b feat/my-change`.
3. Make your change. Add or update tests next to the component (`*.test.ts`).
4. Make sure everything passes:
   ```sh
   pnpm lint && pnpm typecheck && pnpm test:run && pnpm build
   ```
5. Open a pull request describing what changed and why.

## Adding a component

- Put it in `src/components/` as a `<script setup lang="ts">` SFC.
- Export it from `src/index.ts` and register it in the plugin's `install`.
- Try it in `playground/App.vue` and document it in the README table.
