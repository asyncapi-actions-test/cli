# @asyncapi/diff

## 90.0.1

### Patch Changes

- 1782a92: Test the complete CLI workspace release in the sandbox.

## 0.6.0

### Minor Changes

- bdfb435: Move `@asyncapi/diff` into this monorepo as `packages/diff`. The library now exports `AsyncAPIDiff` from the package entry and throws coded `TypeError` subclasses for a version mismatch and an invalid override, with the same messages as before. Overrides are applied to a copy of the rule table so one call cannot change the next call in the same process.
